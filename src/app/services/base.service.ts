import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  baseApiUrl: any;

  constructor(private http: HttpClient) {
    this.baseApiUrl = environment.apiUrl;
  }

  private setHeader() {
    let headerJson = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const headers = new HttpHeaders(headerJson);
    return headers;
  }

  get() {
    let url = this.baseApiUrl + `find`;
    let headers = this.setHeader();
    return this.http.get(url, { headers: headers });
  }

  // post(url: any, body: any, type?: any) {
  //   url = this.baseApiUrl + url;
  //   let headers = this.setHeader();
  //   return this.http.post(url, body, { headers: headers });
  // }

}
