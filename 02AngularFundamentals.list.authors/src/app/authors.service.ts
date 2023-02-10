import { Injectable } from '@angular/core';

// authors.service.ts
export class AuthorsService {
  authors = ["author1", "author2", "author2"];

  getAuthors(){
      return this.authors;
  }

  getCountAuthors(){
      return this.authors.length;
  }
}