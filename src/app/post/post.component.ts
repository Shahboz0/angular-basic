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
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnDestroy{

  @Input() post: any;

  count = 0;

  constructor(private sharedService: SharedService) {
  }

  increaseCount(): void {
    this.count++;
    this.sharedService.changeCount(this.count);
  }

  decreaseCount(): void {
    this.count--;
    this.sharedService.changeCount(this.count);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

}
