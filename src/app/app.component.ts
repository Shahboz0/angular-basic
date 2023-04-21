import {Component, OnInit} from '@angular/core';
import {CommunicationService} from "./communication.service";
import {SharedService} from "./shared.service";

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
export class AppComponent implements OnInit{
  title = 'angular-basic';
  post: Post = {id: 1, title: 'First card', body:'description'}
  count: number = 0;


  constructor(private sharedService: SharedService) {
  }


  ngOnInit(): void {
    this.sharedService.count$.subscribe((count) => {
      this.count = count;
    })
  }
}
