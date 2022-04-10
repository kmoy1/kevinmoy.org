import { Component, OnInit } from '@angular/core';
import { MdService } from '../md.service';
import { Problem } from '../model/Problem';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {
  problems: Problem[] = [];

  constructor(private mdService: MdService) { }

  ngOnInit(): void {
    this.getProblems();
  }

  getProblems(): void {
    this.mdService.getProblems().subscribe(problems => this.problems = problems);
  }

}
