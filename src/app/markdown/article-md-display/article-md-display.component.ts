import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdService } from '../../service/md.service';
import { Article } from '../../model/Article';

@Component({
  selector: 'app-article-md-display',
  templateUrl: './article-md-display.component.html',
  styleUrls: ['./article-md-display.component.css']
})
export class ArticleMdDisplayComponent implements OnInit {
  article: Article | undefined;
  fileID = "";

  constructor(private route: ActivatedRoute, private mdService: MdService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get("id")!;
    this.fileID = name;
    this.getArticle();
  }

  getArticle(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mdService.getArticle(id).subscribe(article => this.article = article);
  }
}
