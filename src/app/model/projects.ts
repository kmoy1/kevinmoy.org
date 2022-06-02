import { Project } from './Project';

export const PROJECTS: Project[] = [
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
    {
      projectName: "ML Book", 
      projectLink: "https://kmoy1.github.io/ML_Book", 
      projectDesc: `Notes and tutorials on machine learning that I wrote and compiled into a Jupyter book while taking CS189 at Berkeley.`
    },
    {
      projectName: "kevinmoy.org", 
      projectLink: "https://github.com/kmoy1/kevinmoy.org", 
      projectDesc: `This website, written in Angular and Bootstrap.`
    },
];