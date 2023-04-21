import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {

  form: FormGroup


  constructor(private shared: SharedService) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(6)]),
      body: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit():void {
    console.log('submit', this.form.value)
      this.shared.addPost(this.form.value)
  }
}
