import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url = "https://bookstore-server-xdvo.onrender.com";
  constructor(private http:HttpClient) { }
  getAllBooksApi(){
    return this.http.get(`${this.server_url}/listbooks`)
  }
}
 