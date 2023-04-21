import {Component} from '@angular/core';

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
export class AppComponent{
  title = 'angular-basic';
}
