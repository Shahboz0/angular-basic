import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
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
  intervalId: number;

  constructor(private sharedService: SharedService) {
    this.intervalId = setInterval(()=> {
      this.count++
      this.sharedService.changeCount(this.count)
    }, 2000)
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
    clearInterval(this.intervalId)
  }

}
