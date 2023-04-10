import { Component, Input } from '@angular/core';
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
@Input() item:{nam:string, email:string} = {nam:'', email:''};

course = 'react';
  constructor(private enrollService : TestService){
    
  }
  OnEnroll(){
  this.enrollService.OnEnrollClicked(this.course);
  }
}
