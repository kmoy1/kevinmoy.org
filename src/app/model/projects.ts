import { Project } from './Project';

export const PROJECTS: Project[] = [
    {
      projectName: "Semantic Search Playground",
      projectLink: "https://github.com/kmoy1/SemanticSearchPlayground/",
      projectDesc: `Semantic Search Engine using a FAISS store where a user can upload documents
      and train a model on those documents to return the most similar doc given a query.`,
      projectDemoLink: "/projects/semantic_search_playground"
    },
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

export const PROJECT_DEMOS: { [key: string]: string } = {
  'semantic_search_playground': 'https://semanticsearchplayground-kmoy.streamlit.app?embed=true'
}
