import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  path = "assets/md/about.md"
  constructor() { }

  ngOnInit(): void {
  }

}
