import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Forum } from '../types/forum';

@Component({
  selector: 'app-forums-list',
  templateUrl: './forums-list.component.html',
  styleUrls: ['./forums-list.component.css']
})
export class ForumsListComponent implements OnInit {
  forumsList: Forum[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService) { }

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
