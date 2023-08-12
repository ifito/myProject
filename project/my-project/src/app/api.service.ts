import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Forum } from './types/forum';
import { Post } from './types/post';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  getPost(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Forum>(`${apiUrl}/themes/${id}`);
  }

  getForums() {
    const { apiUrl } = environment;
    return this.http.get<Forum[]>(`${apiUrl}/themes`);
  }

  createPost(themeName: string, postText: string) {
    return this.http.post<Forum>('/api/themes', { themeName, postText });
  }

  createComment(postText: string) {
    return this.http.post<Forum>(`/api/themes/`, { postText });
  }

  getPosts() {
    const { apiUrl } = environment;
    return this.http.get<Post[]>(`${apiUrl}/posts`);
  }
}
