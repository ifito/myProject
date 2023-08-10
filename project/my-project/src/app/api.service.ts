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

  getPost(id:string) {
    const {apiUrl} = environment;
    return this.http.get<Forum>(`${apiUrl}/themes/${id}`);
  }

  getForums() {
    const {apiUrl} = environment;
    return this.http.get<Forum[]>(`${apiUrl}/themes`);
  }

  getPosts() {
    const {apiUrl} = environment;
    return this.http.get<Post[]>(`${apiUrl}/posts`);
  }
}
