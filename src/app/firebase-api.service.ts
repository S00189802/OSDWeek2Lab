import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  apiURL = 'https://us-central1-angular-test1-9da2f.cloudfunctions.net'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getBooks(): Observable<Book> {
    return this.http.get<Book>(this.apiURL + '/getBooks')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  addBook(title1:string, author1:string) {
    var obj = {title: title1, author: author1}
    return this.http.post(this.apiURL + '/addBook?title=' + obj.title + '&author=' + obj.author, obj)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  delBook(id:string): Observable<Book> {
    return this.http.delete<Book>(this.apiURL + '/deleteBook?id=' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  


  handleError(error){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else
    {
      errorMessage = `Error code ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
    
  }
  


}
