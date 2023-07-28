import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from './new-post/new-post.component';
import { ForumInfoComponent } from './forum-info/forum-info.component';



@NgModule({
  declarations: [
    NewPostComponent,
    ForumInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
