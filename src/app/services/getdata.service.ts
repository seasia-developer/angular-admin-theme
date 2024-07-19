import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { }

  getData(pageIndex: number, pageSize: number) {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?page=${pageIndex + 1}&size=${pageSize}`;
    return this.http.get(apiUrl);
  }


}
