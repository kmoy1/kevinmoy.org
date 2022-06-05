import { Inject, Injectable, Optional, SecurityContext } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { KatexOptions } from './katex-options';
import { MarkedOptions } from './marked-options';
import { MarkedRenderer, SECURITY_CONTEXT } from 'ngx-markdown';
import { marked } from 'marked';
import { DomSanitizer } from '@angular/platform-browser';


declare let katex: {
  renderToString(tex: string, options?: KatexOptions): string;
};

declare let Prism: {
  highlightAllUnder: (element: Element | Document) => void;
};


@Injectable({
  providedIn: 'root'
})
export class NgxMathMdService {

  private readonly initialMarkedOptions: MarkedOptions = {
    renderer: new MarkedRenderer(),
  };

  private _options: MarkedOptions | undefined;
  get options(): MarkedOptions { return this._options!; }
  set options(value: MarkedOptions) {
    this._options = { ...this.initialMarkedOptions, ...value };
  }

  constructor(
    @Inject(SECURITY_CONTEXT) private securityContext: SecurityContext,
    @Optional() private http: HttpClient,
    @Optional() options: MarkedOptions,
    private sanitizer: DomSanitizer
  ) {
    this.options = options;
  }

  /** Convert markdown string to HTML string. */
  convert(markdown: string,  markedOptions = this.options): string {
    const convertedHTML = marked(markdown, markedOptions);
    return this.sanitizer.sanitize(this.securityContext, convertedHTML) || '';
  }

  getSource(src: string): Observable<string> {
    return this.http
      .get(src, { responseType: 'text' });
  }

  /** Render latex in HTML string via katex. */
  renderLatex(html: string, katexOptions: KatexOptions | undefined) {
    const inlineLatexRegex = /\$([^\s]*?[^$]*?[^\s]*?)\$/gm;
    const displayLatexRegex = /\$\$([^\s]*?[^$]*?[^\s]*?)\$\$/gm;
    //Replace display mode first.
    katexOptions!['displayMode'] = true;
    const replaceDisplayMode = html.replace(displayLatexRegex, (_, tex) => {
      return katex.renderToString(tex, katexOptions);
    });
    katexOptions!['displayMode'] = false;
    const fullLatexProcessed = replaceDisplayMode.replace(inlineLatexRegex, (_, tex) => katex.renderToString(tex, katexOptions));
    return fullLatexProcessed;
  }

  /** Render markdown code blocks as prismjs elements. */
  renderCodeBlocks(element?: Element | Document) {
    if (typeof Prism !== 'undefined') {
      if (!element) {
        element = document;
      }
      const noLanguageElements = element.querySelectorAll('pre code:not([class*="language-"])');
      Array.prototype.forEach.call(noLanguageElements, (x: Element) => x.classList.add('language-none'));
      Prism.highlightAllUnder(element);
    }
  }
}

