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
  posts: any[] = [];
  

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe({
      next: (response: any[]) => {
        this.posts = response;
      },
      error: (err: any) => {
        this.handleError;
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
      error: (err: Response) => {
        this.handleError;
      }
    });
  }

  updatePost(post: any) {
    //this.http.put(this.url, JSON.stringify(post));
    this.service.updatePost(post.id)
    .subscribe({
      next: response => {
        console.log(response)
      }, 
      error: err => {
        this.handleError;
      }
    });
    
  }


  deletePost(post: any) {
    this.service.deletePost(post.id)
    .subscribe({
      next: response => {
        let index = this.posts.indexOf(post);
        if (index >= 0) {
          this.posts.splice(index, 1);
        }
      }, 
      error: (err: Response) => {
        this.handleError;
      }
    });
  }

  private handleError(error: Response){
    if(error.status === 404)
      alert('This post has already been deleted.')
    else if(error.status === 400)
          console.log("Bad Input");
    else {
      alert('An unexpected error occured.');
    }
  }

}
