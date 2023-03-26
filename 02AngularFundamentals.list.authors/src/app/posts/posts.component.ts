import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
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
    this.posts = this.service.getPosts()
    .subscribe({
      next: response => {
        this.posts = response;
      },
      error: (err: any) => {
        console.log(err);
        alert('An unexpected error occurred.');
      }
    });
  }
  

  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value};
    input.value = '';

    this.service.createPost(post)
    .subscribe({
      next: response => {
        //post['id'] = response.json().id;
        this.posts.splice(0,0,post);
        console.log(response);
      }, 
      error: err => {
        console.log(err);
        alert('An unexpected error occured.');
      }
    });
  }

  updatePost(post: any) {
    this.service.updatePost(post.id)
    .subscribe({
      next: response => {
        console.log(response)
      }, 
      error: err => {
        console.log(err);
        alert('An unexpected error occured.');
      }
    });
    //this.http.put(this.url, JSON.stringify(post));
  }


  deletePost(post: any) {
    this.service.deletePost(post.id)
    .subscribe({
      next: response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, 
      error: err => {
        // it's possible receive an unexist id
        if(err.status === 404)
          alert('This post has already been deleted.')
        else {
          alert('An unexpected error occured.');
        }
        console.log(err);
      }
    });
  }
}
