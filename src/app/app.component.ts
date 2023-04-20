import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basic';
  show = true
  arr: Array<number> = [1, 2, 3, 4, 10, 11, 23]
}
