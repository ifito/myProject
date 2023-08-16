import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';
import { Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})

export class PostsListComponent implements OnInit {
  postsList: Post[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(
      {
        next: (posts) => {
          this.postsList = posts;
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          console.error(`Error: ${err}`);
        }
      });
  }

  viewPost(themeId: string, userId: string): void {
    console.log(themeId, userId);
    //this.router.navigate(['users/edit'], { queryParams: {} });
    //this.router.navigate(['users/edit'], { queryParams: { id: postId } });
  }
}

