import {Component, OnInit} from '@angular/core';
import {Post} from "../../app.component";
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
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
}
