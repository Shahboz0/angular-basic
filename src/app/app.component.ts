import {Component, OnInit} from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {CommunicationService} from "./communication.service";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-basic';
  posts: Post[] = []

  constructor(private service: CommunicationService) {
  }

  deletePost(event: Post): void {
    this.posts = this.posts.filter((post) => post.id !== event.id)
  }

  ngOnInit(): void {
    this.service.getPosts().subscribe((value) => {
      this.posts = value;
    })
  }
}
