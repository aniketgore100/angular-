import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return[
      { name: 'aniket', age:28, email:'goreaniket100@gmail.com' },
      { name: 'sanket', age:30, email:'sanketsalunke@gmail.com' },
      { name: 'kishore', age:34, email:'kishorekhotkar@gmail.com' }
    ]
  }
}
