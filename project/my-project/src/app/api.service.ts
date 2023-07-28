import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Forum } from './types/forum';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getForums() {
    const {appUrl} = environment;
    return this.http.get<Forum[]>(`${appUrl}/themes`);
  }

  getPosts() {
    const {appUrl} = environment;
    return this.http.get<Post[]>(`${appUrl}/posts`);
  }
}
