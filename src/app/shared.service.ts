import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Post} from "./app.component";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private postSub$ = new Subject<Post>();
  post$ = this.postSub$.asObservable();


  public addPost(post: Post): void {
    this.postSub$.next(post);
  }

}
