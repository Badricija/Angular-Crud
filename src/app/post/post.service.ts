import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL='http://localhost:3000'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  private errorHandler(errorRes: any) {
    let errorMessage = 'An unknown error occurred!';
    if (errorRes.error instanceof ErrorEvent) {
      errorMessage = `Error: ${errorRes.error.message}`;
    } else {
      errorMessage = `Error Code: ${errorRes.status}\nMessage: ${errorRes.message}`;
    }
    return throwError(() => errorMessage);
  }

  getAll():Observable<any>{
    return this.httpClient.get(this.apiURL+ '/posts').pipe(catchError(this.errorHandler)
    )
  }

  create (post:Post):Observable<any> {
    return this.httpClient.post(this.apiURL+ '/posts', JSON.stringify(post), this.httpOptions).pipe(catchError(this.errorHandler)
    )
  }

  find (id:number):Observable<any> {
    return this.httpClient.get(this.apiURL+ '/posts/'+id).pipe(catchError(this.errorHandler)
    )
  }
  update (id:number, post:Post):Observable<any> {
    return this.httpClient.put(this.apiURL+ '/posts/'+id, JSON.stringify(post), this.httpOptions).pipe(catchError(this.errorHandler)
    )
  }
  delete (id:number):Observable<any> {
    return this.httpClient.delete(this.apiURL+ '/posts/'+id).pipe(catchError(this.errorHandler)
    )
  }
  
}

