import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor() { }
  OnEnrollClicked(course:string){
    alert('thank you for enrolling  '  + course + " " + ' course');
  }
}
