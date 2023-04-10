import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userdata:any = {}
  getValueOf(data:NgForm){
    console.warn(data)
    this.userdata = data;
  }
}
