import { Component, OnInit, Input } from '@angular/core';
import { NgxIpynbService } from './ngx-ipynb.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'ngx-ipynb',
  template: '<div *ngIf="innerHtml"><div [innerHTML]="sanitizer.bypassSecurityTrustHtml(innerHtml)"></div></div>',
  styles: []
})
export class NgxIpynbComponent implements OnInit {
  /** Path to html file. */
  @Input() src: string | undefined;
  innerHtml = "";

  constructor(public ipynbService: NgxIpynbService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadExternalScript("https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js")
  }

  ngOnChanges(): void {
    console.log("CHANGED SRC:", this.src);
    if (this.src != null) {
      this.handleSrc();
      return;
    }
  }

  private handleSrc(): void {
    this.ipynbService
      .getSource(this.src!)
      .subscribe(
        ipynb => {
          //console.log(ipynb);
          this.innerHtml = ipynb;
        },
        error => console.log(error),
      );
  }

  public loadExternalScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
