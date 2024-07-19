import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  baseUrl: any = 'https://sarealstate.appsndevs.com';


  constructor(private http: HttpClient) { }



  getPostData(url: string, data: any) {
    url = this.baseUrl + url;
    return this.http.post<any>(url, data)
  }


  getUserData(url: string) {
    url = this.baseUrl + url;
    return this.http.get(url)
  }

}
