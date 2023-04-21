import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {interval, Observable, repeatWhen} from "rxjs";
import {Post} from "./app.component";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(repeatWhen(() => interval(1000)))
  }
}
