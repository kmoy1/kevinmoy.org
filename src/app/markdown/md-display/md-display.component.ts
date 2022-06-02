import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-md-display',
  templateUrl: './md-display.component.html',
  styleUrls: ['./md-display.component.css']
})
export class MdDisplayComponent implements OnInit {
  @Input() md_path = '';

  constructor() { }

  ngOnInit(): void {

  }

}
