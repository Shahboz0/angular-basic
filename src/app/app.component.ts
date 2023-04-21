import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedService} from "./shared.service";

export interface Post {
  id?: number;
  userId?: number;
  title: string;
  body: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'angular-basic';
  posts: Post[] = [
    {id: 1, title: 'First card', body:'description'}
  ]

constructor(private shared: SharedService) {
}

  ngOnInit(): void {
    this.shared.post$.subscribe((post) => {
      this.posts.unshift(post)
    })
  }

  ngOnDestroy(): void {
  }
}
