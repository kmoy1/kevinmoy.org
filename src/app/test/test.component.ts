import { Component, OnInit } from '@angular/core';
import { SemanticSearchService } from '../service/semanticsearch.service';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../loading/loading.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  inputData: string = ''; // Bind this to the input field
  responseData: any = null; // Store API response here
  errorMessage: string | null = null; // Handle errors here

  private TEST_API_URL = 'https://925247zovj.execute-api.us-west-2.amazonaws.com/prod/objects';
  constructor(private http: HttpClient, private loadingService: LoadingService) {}
  // constructor(private semanticSearchService: SemanticSearchService) { }
  // Call on refresh page.
  // clearModel() {
  //   // TODO: Replace with actual logic to refresh the model.
  //   const observer = {
  //     next: (response: any) => console.log('Model cleared:', response),
  //     error: (err: any) => console.error('Error clearing model:', err),
  //   };
  //   this.semanticSearchService.clearModel().subscribe(observer);
  // }

  // // Upload user-uploaded training docs to the embedding model.
  // uploadTrainingDocuments() {
  //   // TODO: Replace with actual logic to display upload successful message.
  //   const docs = [
  //     { title: 'Doc1', content: 'This is the content of document 1.' },
  //     { title: 'Doc2', content: 'Content of document 2 goes here.' },
  //   ];
  //   const observer = {
  //     next: (response: any) => console.log('Documents uploaded:', response),
  //     error: (err: any) => console.error('Error uploading documents:', err),
  //   };
  //   this.semanticSearchService.uploadDocuments(docs).subscribe(observer);
  // }

  // // Run query on trained model to return docs that match the best.
  // search() {
  //   // TODO: Replace with actual logic to submit query to model and get a response.
  //   const observer = {
  //     next: (response: any) => console.log('Search results:', response),
  //     error: (err: any) => console.error('Error searching documents:', err),
  //   };
  //   this.semanticSearchService.searchDocuments('example query').subscribe(observer);
  // }


  onSubmit() {
    this.responseData = null;
    this.errorMessage = null;
    this.loadingService.show();

    //CALL SPECIFIED API
    this.http.get(this.TEST_API_URL).subscribe({
      next: (response) => {
        this.responseData = response;
        this.loadingService.hide();
      },
      error: (error) => {
        this.errorMessage = 'Calling API FAILED!';
        console.error(error);
        this.loadingService.hide();
      },
      complete: () => {
        console.log('Request complete');
      },
    });
  }


}
