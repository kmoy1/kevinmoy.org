import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Problem } from '../model/Problem';
import { PROBLEMS } from '../model/problems';
import { Project } from '../model/Project';
import { PROJECTS } from '../model/projects';
import { Article } from '../model/Article';
import { ARTICLES } from '../model/articles';

@Injectable({
  providedIn: 'root'
})
export class MdService {

  constructor() { }

  getProblems(): Observable<Problem[]> {
    return of(PROBLEMS);
  }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getArticles(): Observable<Article[]> {
    return of(ARTICLES);
  }

  getProblem(id: number): Observable<Problem> {
    const problem = PROBLEMS.find(prob => prob.id === id)!;
    return of(problem);
  }

  getProject(name: String): Observable<Project> {
    const project = PROJECTS.find(proj => proj.projectName === name)!;
    return of(project);
  }

  getArticle(id: number): Observable<Article> {
    const article = ARTICLES.find(art => art.id === id)!;
    return of(article);
  }

}
