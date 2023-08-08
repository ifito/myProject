import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Forum } from 'src/app/types/forum';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-forum-info',
  templateUrl: './forum-info.component.html',
  styleUrls: ['./forum-info.component.css']
})
export class ForumInfoComponent implements OnInit {
  post: Forum | undefined;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.fetchPost();
  }

  fetchPost(): void {

    const id = this.activatedRoute.snapshot.params['themeId'];
    this.apiService.getPost(id).subscribe(post => {
      this.post = post;
    });
  }
}
