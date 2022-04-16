import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Problem } from './model/Problem';
import { PROBLEMS } from './model/problems';
import { Project } from './model/Project';
import { PROJECTS } from './model/projects';

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

  getProblem(id: number): Observable<Problem> {
    const problem = PROBLEMS.find(prob => prob.id === id)!;
    return of(problem);
  }

  getProject(name: String): Observable<Project> {
    const project = PROJECTS.find(proj => proj.projectName === name)!;
    return of(project);
  }

}
