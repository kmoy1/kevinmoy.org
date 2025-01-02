import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SemanticSearchService {
  private apiUrl = 'http://<TODO>'; // TODO: Replace this with the actual API for the semantic search.

  constructor(private http: HttpClient) {}

    // Upload documents
    uploadDocuments(documents: { title: string; content: string }[]): Observable<any> {
      return this.http.post(`${this.apiUrl}/upload-docs/`, { documents });
    }

    // Query the model
    searchDocuments(query: string): Observable<any> {
      return this.http.post(`${this.apiUrl}/search/`, { query });
    }

    // Clear the model
    clearModel(): Observable<any> {
      return this.http.post(`${this.apiUrl}/clear-model/`, {});
    }

}
