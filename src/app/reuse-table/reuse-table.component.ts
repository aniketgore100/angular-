import { Component, Input, Output,OnInit} from '@angular/core';
@Component({
  selector: 'app-reuse-table',
  templateUrl: './reuse-table.component.html',
  styleUrls: ['./reuse-table.component.css']
 })
export class ReuseTableComponent {
  heroes =[
    {id: 11, name: 'mr. Nice', country: 'India'},
    {id: 12, name: 'Narco', country: 'USA'},
    {id: 13, name: 'Bombasto', country: 'Canada'},
    {id: 14, name: 'celeritaas', country: 'Russia'},
    {id: 15, name: 'Magneta', country: 'China'},
    {id: 16, name: 'Rubberman', country: 'Germany'},
    {id: 17, name: 'Dynama', country: 'Honk Kong'},
    {id: 18, name: 'Dr IQ', country: 'South Africa'},
    {id: 19, name: 'Magma', country: 'Shri LAnka'},
    {id: 20, name: 'Tornado', country: 'Uk'},
    {id: 21, name: 'Tokyo', country: 'Japan'}
  ]
  
}


