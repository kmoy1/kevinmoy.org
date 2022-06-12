import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NgxIpynbService {

  constructor(@Optional() private http: HttpClient) { }

  getSource(src: string): Observable<string> {
    return this.http
      .get(src, { responseType: 'text' });
  }
}
