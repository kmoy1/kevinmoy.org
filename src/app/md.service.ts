import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Problem } from './model/Problem';
import { PROBLEMS } from './model/problems';

@Injectable({
  providedIn: 'root'
})
export class MdService {

  constructor() { }

  getProblems(): Observable<Problem[]> {
    return of(PROBLEMS);
  }

  getProblem(id: number): Observable<Problem> {
    const problem = PROBLEMS.find(prob => prob.id === id)!;
    return of(problem);
  }
}
