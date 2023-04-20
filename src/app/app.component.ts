import { Component } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basic';
  posts: Post[] = [
    {id: 1, title: 'First card', text:'description'},
    // {id: 2, title: 'Second card', text:'description'},
    // {id: 3, title: 'Third card', text:'description'}
  ]

  deletePost(event: Post): void {
    this.posts = this.posts.filter((post) => post.id !== event.id)
  }

  changePost(): void {
    this.posts[0].title = 'Changed card'
  }
}
