import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  // providers: [DataService]
})
export class EmployeeComponent implements OnInit{
  username : string = " ";
  status : string = " ";
  employes :{name:string, status: string}[] = [];

  constructor(private employeSer : DataService){}

  ngOnInit() {
  this.employes=this.employeSer.employes;
}

  AddUser(){
  this.employeSer.adduser(this.username, this.status)
}

}
