import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employes=[
    {name:'aniket', status:'intern'},
    {name:'sanket', status:'full-time'},
    {name:'kishore', status:'intern'},
]
adduser(name:string, status:string){
  this.employes.push({name:name, status:status });
}
}
