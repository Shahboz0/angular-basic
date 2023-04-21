import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedService} from "./shared.service";
import {Subscription} from "rxjs";
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
export class AppComponent implements OnInit, OnDestroy{
  title = 'angular-basic';
  post: Post = {id: 1, title: 'First card', body:'description'}
  count: number = 0;
  show = true;
  subscription = new Subscription();


  constructor(private sharedService: SharedService, private servise: CommunicationService) {
  }


  ngOnInit(): void {
    this.subscription.add(this.servise.getPosts().subscribe((value) => {
      console.log(value)
    },
      () => {},
      () => {}));
    this.subscription.add(this.sharedService.count$.subscribe((count) => {
      this.count = count;
    }))
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
