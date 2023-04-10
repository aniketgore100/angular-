import { Component } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {
  userDetails = [
    {
      name : 'aniket',
      email : 'aniketgore@gmail.com',
      phone : '9588'
    },
    {
      name : 'sahebrao',
      email : 'sahebrao@gmail.com',
      phone : '9422'
    },
    {
      name : 'gore',
      email : 'gore@gmail.com',
      phone : '9763'
    },
    {
      name : 'hello',
      email : 'hello@gmail.com',
      phone : '4288'
    },
    {
      name : 'sanket',
      email : 'salunkesanket@gmail.com',
      phone : '9763'
    }
  ]
}
