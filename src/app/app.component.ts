import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basic';
  inputValueStr = ''
  changeBackground = false

  image: string = 'https://wallbox.ru/resize/1024x1024/wallpapers/main/201151/koshki-f60c1e13bc32.jpg'

  changeTitleAndImg(): void {
    this.title = 'Changed title'
    this.image = 'https://topstorybox.com/wp-content/uploads/2023/01/cat.jpg'
  }

  inputValue(event: Event): void {
    this.inputValueStr = (event.target as HTMLInputElement).value;
  }
}
