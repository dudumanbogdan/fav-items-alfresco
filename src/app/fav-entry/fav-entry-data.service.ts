import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class FavEntryDataService {
  static baseEndPoint = 'https://s3.eu-west-2.amazonaws.com/alfresco-adf-app-test';

  constructor(private httpClient: HttpClient) {}

  getFavoriteList() {
    return this.httpClient
      .get(`${FavEntryDataService.baseEndPoint}/favorites.json`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // TODO - add toaster for errors instead of console functions
    if (error.error instanceof ErrorEvent) {
      console.error(
        'A client-side or network error occurred:',
        error.error.message
      );
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return new ErrorObservable(
      'Something bad happened; please try again later.'
    );
  }
}
