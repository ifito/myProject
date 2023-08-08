import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Forum } from '../types/forum';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-forums-list',
  templateUrl: './forums-list.component.html',
  styleUrls: ['./forums-list.component.css']
})
export class ForumsListComponent implements OnInit {
  forumsList: Forum[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService, private userService: UserService) { }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.apiService.getForums().subscribe(
      {
        next: (forums) => {
          this.forumsList = forums;
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          console.error(`Error: ${err}`);
        }
      });
  }
}
