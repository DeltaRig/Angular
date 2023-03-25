import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts: any | undefined;
  

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.posts = this.service.getPosts();
    //(this.url).subscribe(response => {
      //console.log(response);
      //this.posts = response;
    //});
  }

  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value};
    input.value = '';

    this.service.createPost(input).subscribe(response => {
      //post['id'] = response.json().id;
      this.posts.splice(0,0,post);
      console.log(response);
    });
  }

  updatePost(post: any) {
    this.service.updatePost(post.id).subscribe(response => {
      console.log(response)
    });
    //this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post: any) {
    this.service.deletePost(post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    })
  }
}
