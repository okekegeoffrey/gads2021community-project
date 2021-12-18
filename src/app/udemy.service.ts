import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError, tap } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class UdemyService {

  udemyApiUrl = "https://www.udemy.com/api-2.0/courses/";

  // headers = new HttpHeaders({
  //   'Authorization': 'Basic{BAE64_ENCODED(jFMwTjjEOJhZTjZy5Z6G0D9e4o4baffeclEDsG7O: riu4sLfJOsYNTyXBPDZhJZZ4yCUFIgupTnoUrnU0fVg482lYC062hdX4MKZWgROjJCLHLtheCTVVUNzS22oIGgr6MYsNRT7Ab89gWuR4GruR1F8c27tDLApm7hzIk1TD)}',
  //   'content_type': 'application/json'
  // })


  const headers = new HttpHeaders({ 'Authorization: Basic BASE64_ENCODED(jFMwTjjEOJhZTjZy5Z6G0D9e4o4baffeclEDsG7O: riu4sLfJOsYNTyXBPDZhJZZ4yCUFIgupTnoUrnU0fVg482lYC062hdX4MKZWgROjJCLHLtheCTVVUNzS22oIGgr6MYsNRT7Ab89gWuR4GruR1F8c27tDLApm7hzIk1TD)', 'content-type': 'application/json'}  )

  constructor(private http: HttpClient) { }

  // getCourses():Observable<any[]> {
  //   return this.http.get<any[]>(this.udemyApiUrl, {headers: this.headers}).pipe(
  //     tap(data => console.log('All', JSON.stringify(data))),
  //     catchError(this.handleError)
  //   )
  // }

  getCourses() {
    return this.http.get('https://www.udemy.com/api-2.0/courses/', {headers});
  }

  getCourse(id:any) {
    return this.http.get(this.udemyApiUrl + id, {headers: this.headers});
  }

//   handleError(error:any) {
//     let errorMessage = '';
//     if(error.error instanceof ErrorEvent) {
//       // Get client-side error
//       errorMessage = error.error.message;
//     } else {
//       // Get server-side error
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     window.alert(errorMessage);
//     return throwError(errorMessage);
//  }

private handleError(err: HttpErrorResponse) {
  // in a real world app, we may need to send the
  // server to some remote logging infrastructure
  // instead of just logging it to console
  let errorMessage = "";
  if(err.error instanceof ErrorEvent) {
    // A client-side or network error occured. Handle
    // it accordingly
    errorMessage = `An error occured: ${err.error.message}`;
  } else {
    // the back-end returned an unsuccessful reponse
    // code
    // the response body may contain clues as to what
    // went wrong
    errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}
}

