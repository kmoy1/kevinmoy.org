import { Component, OnInit } from '@angular/core';


export interface Card {
  cardTitle: String;
  cardDescription: String;
  path: String;
}

const HOMEPAGE_CARDS: Card[] = [
  {cardTitle: "Projects", cardDescription: "Projects I've created and contributed to over the years.", path:"/projects"},
  {cardTitle: "Blog", cardDescription: "Computer nerdy stuff I like to write about.", path:"/articles"},
  {cardTitle: "Problems", cardDescription: "Some cool CS problems I thought of in the shower.", path:"/problems"},
  {cardTitle: "About Me", cardDescription: "About Me.", path:"/about"},
];

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  cards = HOMEPAGE_CARDS;

  constructor() {}

  ngOnInit(): void {}

}
