import { Component, OnInit } from '@angular/core';
import { MdService } from '../../md.service';
import { Article } from '../../model/Article';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles: Article[] = [];

  constructor(private mdService: MdService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.mdService.getArticles().subscribe(articles => this.articles = articles);
  }
}
