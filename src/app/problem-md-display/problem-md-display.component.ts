import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdService } from '../md.service';
import { Problem } from '../model/Problem';


@Component({
  selector: 'app-problem-md-display',
  templateUrl: './problem-md-display.component.html',
  styleUrls: ['./problem-md-display.component.css']
})
export class ProblemMdDisplayComponent implements OnInit {
  problem: Problem | undefined;
  fileID = "";

  constructor(private route: ActivatedRoute, private mdService: MdService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get("id")!;
    this.fileID = name;
    this.getProblem();
  }

  getProblem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mdService.getProblem(id).subscribe(problem => this.problem = problem);
  }
}
