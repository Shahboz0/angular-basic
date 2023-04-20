import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked ,AfterViewChecked ,OnDestroy{

  @Input() post: any;
  @Output() deleteEvent: EventEmitter<Post> = new EventEmitter<Post>()

  constructor() {
    console.log('constructor')
  }

  deletePost(post: Post): void {
      this.deleteEvent.emit(post)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

}
