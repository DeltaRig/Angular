import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  create(resource: any) {
    return this.http.post(this.url, JSON.stringify(resource));
  }

  update(id: any){
    return this.http.patch(this.url + '/' + id, JSON.stringify({ isRead: true}));
  }

  delete(id: any){
    return this.http.delete(this.url + '/' + id);
  }

}
