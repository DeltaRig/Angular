import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post(
      'https://ng-complete-guide-ce9c9-default-rtdb.firebaseio.com/posts.json', 
      postData
      ).subscribe(responseData => {
        console.log(responseData);
      });
    //console.log(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get('https://ng-complete-guide-ce9c9-default-rtdb.firebaseio.com/posts.json')
    .pipe(map(responseData => {
      // convert javascript object in array
      const postsArray = [];
      for (const key in responseData) {
        if(responseData.hasOwnProperty(key)) { // check if has own property to don't try access a property or prototype
          postsArray.push({...responseData[key], id: key})
        }
      }
      return postsArray;
    }
    ))
    .subscribe(posts=> {

    });
  }
}
