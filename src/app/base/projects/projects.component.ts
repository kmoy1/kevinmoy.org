import { Component, OnInit } from '@angular/core';
import { MdService } from '../../service/md.service';
import { Project } from '../../model/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private mdService: MdService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.mdService.getProjects().subscribe(projects => this.projects = projects);
  }
}
