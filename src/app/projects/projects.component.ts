import { Component, OnInit } from '@angular/core';


export interface Project {
  projectName: string;
  projectLink: string;
  projectDesc: string;
}

const PROJECT_LIST: Project[] = [
  {
    projectName: "CollegeStatScraper", 
    projectLink: "https://github.com/kmoy1/CollegeStatScraper", 
    projectDesc: `College/International/G-league/HS statistic scraper for every drafted player in the last 10 NBA drafts, written in Python.
                Trained an ML model on this collected data in order to predict future draft class's NBA selection group. 
                Model performs with over 70 percent accuracy when tested on draft pools from 2010-2019.`
  },
  {
    projectName: "Cheapest Network", 
    projectLink: "https://github.com/kmoy1/CheapestNetwork", 
    projectDesc: `An algorithm I implemented in Python to find the Dominating Set that minimizes average pairwise distance in a given graph.`
  },
]

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = PROJECT_LIST;
  constructor() { }

  ngOnInit(): void {
  }

}
