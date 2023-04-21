import {Component, OnInit} from '@angular/core';
import {CommunicationService} from "./communication.service";

export interface Post {
  id: number;
  userId?: number;
  title: string;
  body: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angular-basic';
  post: Post = {id: 1, title: 'First card', body:'description'}
  count: number = 0;

  getCount(event: number): void {
    this.count = event;
  }
}
