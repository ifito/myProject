import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  newPostHandler(form: NgForm):void {
    if(form.invalid) {
      return;
    }

    console.log(form.value);
    
  }
}
