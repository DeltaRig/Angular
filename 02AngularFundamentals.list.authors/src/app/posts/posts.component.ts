import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  posts: any | undefined;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 
    http.get(this.url).subscribe(response => {
      console.log(response);
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value};
    input.value = '';

    this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
      //post['id'] = response.json().id;
      this.posts.splice(0,0,post);
      console.log(response);
    });
  }
}
