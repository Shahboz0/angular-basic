import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from "../ui/post/post.component";
import {PostFormComponent} from "../ui/post-form/post-form.component";
import {PostsComponent} from "./posts.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [PostComponent,
    PostFormComponent,
    PostsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: PostsComponent},
    ])
  ],
  exports: [RouterModule]
})
export class PostsModule { }
