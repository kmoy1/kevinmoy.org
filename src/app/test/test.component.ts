import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  //mdPath = "assets/md/BV/BV.md"
  htmlPath = "assets/html/test3.html"
  constructor() { }

  ngOnInit(): void {
  }

}
