import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from './new-post/new-post.component';
import { ForumInfoComponent } from './forum-info/forum-info.component';
import { PostRoutingModule } from './post-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewPostComponent,
    ForumInfoComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule
  ]
})
export class PostModule { }
