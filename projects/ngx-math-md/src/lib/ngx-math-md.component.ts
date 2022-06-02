import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgxMathMdService } from './ngx-math-md.service';
import { KatexOptions } from './katex-options';

@Component({
  selector: 'ngx-math-md',
  templateUrl: './ngx-math-md.component.html',
  styleUrls: ['./ngx-math-md.component.css']
})
export class NgxMathMdComponent implements OnInit {
  
  /** Path to markdown file. */
  @Input() src: string | undefined;
  @Input() katexOptions: KatexOptions | undefined;

  /** Event emitter indicating compiled markdown is finished. */
  @Output() error = new EventEmitter<string>();
  @Output() load = new EventEmitter<string>();
  @Output() ready = new EventEmitter<void>();


  constructor(public element: ElementRef<HTMLElement>, public mdService: NgxMathMdService) { }

  ngOnInit(): void {
    this.katexOptions = new KatexOptions();
    this.katexOptions['displayMode'] = false;
  }

  ngOnChanges(): void {
    console.log("Input src updated:", this.src);
    if (this.src != null) {
      this.handleSrc();
      return;
    }
  }

  private handleSrc(): void {
    this.mdService
      .getSource(this.src!)
      .subscribe(
        markdown => {
          this.renderMD(markdown);
          this.load.emit(markdown);
        },
        error => this.error.emit(error),
      );
  }
  
  /** Compile markdown into HTML and render found LaTex expressions and code blocks.
    */
  renderMD(markdown: string) {
    let mdAsHtml = this.mdService.convert(markdown);
    console.log("HTML (no latex):", mdAsHtml);
    let latexRenderedHtml = this.mdService.renderKatex(mdAsHtml, this.katexOptions);
    console.log("HTML (latex):", latexRenderedHtml);
    this.element.nativeElement.innerHTML = latexRenderedHtml;
    this.mdService.renderCodeBlocks(this.element.nativeElement);
  }
}
