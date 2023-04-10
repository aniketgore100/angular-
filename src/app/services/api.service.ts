import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }
  url = "https://jsonplaceholder.typicode.com/todos";
  
  
  users(){
    return this.http.get(this.url)   // get 
  }


  savetitle(data2:any){
    return this.http.post(this.url, data2)  // post
  }
}
