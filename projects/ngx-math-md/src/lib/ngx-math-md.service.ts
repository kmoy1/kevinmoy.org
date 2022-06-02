import { Inject, Injectable, Optional, PLATFORM_ID, SecurityContext } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { KatexOptions } from './katex-options';
import { MarkedOptions } from './marked-options';
import { MarkedRenderer, SECURITY_CONTEXT } from 'ngx-markdown';
import { map } from 'rxjs/operators';
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
    @Inject(PLATFORM_ID) private platform: Object,
    @Inject(SECURITY_CONTEXT) private securityContext: SecurityContext,
    @Optional() private http: HttpClient,
    @Optional() options: MarkedOptions,
    private sanitizer: DomSanitizer
  ) {
    this.options = options;
  }

  /** Convert markdown string to HTML string. */
  convert(markdown: string, decodeHtml = false, emojify = false,  markedOptions = this.options): string {
    const trimmed = this.trimIndentation(markdown);
    const decoded = decodeHtml ? this.decodeHtml(trimmed) : trimmed;
    // const emojified = emojify ? this.renderEmoji(decoded) : decoded;
    const compiled = marked(decoded, markedOptions);
    return this.sanitizer.sanitize(this.securityContext, compiled) || '';
  }

  getSource(src: string): Observable<string> {
    return this.http
      .get(src, { responseType: 'text' })
      .pipe(map(markdown => this.handleExtension(src, markdown)));
  }

  /** Render latex in HTML string via katex. */
  renderKatex(html: string, katexOptions: KatexOptions | undefined) {
    const inlineLatexRegex = /\$([^\s]*?[^$]*?[^\s]*?)\$/gm;
    const displayLatexRegex = /\$\$([^\s]*?[^$]*?[^\s]*?)\$\$/gm;
    //Replace display mode first.
    katexOptions!['displayMode'] = true;
    const replaceDisplayMode = html.replace(displayLatexRegex, (_, tex) => {
      console.log("Matched tex ", tex);
      return katex.renderToString(tex, katexOptions);
    });
    console.log("REPLACED DISPLAY MODE:", replaceDisplayMode);
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

  private handleExtension(src: string, markdown: string): string {
    const extension = src
      ? src.split('?')[0].split('.').splice(-1).join()
      : '';
    return extension !== 'md'
      ? '```' + extension + '\n' + markdown + '\n```'
      : markdown;
  }

  private trimIndentation(markdown: string): string {
    if (!markdown) {
      return '';
    }
    let indentStart: number;
    return markdown
      .split('\n')
      .map(line => {
        let lineIdentStart = indentStart;
        if (line.length > 0) {
          lineIdentStart = isNaN(lineIdentStart)
            ? line.search(/\S|$/)
            : Math.min(line.search(/\S|$/), lineIdentStart);
        }
        if (isNaN(indentStart)) {
          indentStart = lineIdentStart;
        }
        return lineIdentStart
          ? line.substring(lineIdentStart)
          : line;
      }).join('\n');
  }

  private decodeHtml(html: string): string {
    if (!isPlatformBrowser(this.platform)) {
      return html;
    }
    const textarea = document.createElement('textarea');
    textarea.innerHTML = html;
    return textarea.value;
  }


}

