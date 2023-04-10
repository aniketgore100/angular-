import { Component, Input,OnInit } from '@angular/core';
import { FileComponent } from './file/file.component';
import { PostService } from './services/post.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from './services/api.service';
import { TestService } from './services/test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers : [TestService]
})
export class AppComponent{

}
  // users:any;
  // constructor(private apiData :ApiService ){
  //   this.apiData.users().subscribe((data)=>{
  //     console.warn("data", data);
  //     this.users = data;
  //   });
  // }
  // getTitle(data2:any){
  //   // console.warn(data2);
  //   this.apiData.savetitle(data2).subscribe((result)=>{
  //     console.warn(result)
  //   })
  // }
//   course = 'angular';
//   constructor(private enrollService : TestService){
    
//   }
//   OnEnroll(){
//   this.enrollService.OnEnrollClicked(this.course);
//   }
// }
// export class AppComponent {

//   title2 = 'send data';
//   data2 = 10;

//   title = 'tutang';
//   getname(name:string, name2:string){
//     alert(name);
//     alert(name2);
//   }

//   // getData(val:string){
//   //   console.warn("function called");
//   //   console.log(val);
//   //   }


//   displayname = ' ';
//   displayval  = ' ';
//     getValue(val:string){
//       console.warn(val);
//       this.displayname = val;
// }
// getVal(info:string){
//    console.warn(info);
//    this.displayval = info;
// }  
// count = 0;
// counter(type:string){
// type==='add' ? this.count++:this.count--;
// }

// name = "Aniket"
// surname = "Gore"
// disable = false

// show  = "yes"


// color = "red";

// colors = "yellow"

// users = ['aniket', 'sahebrao', 'gore', 'hello', 'world'];
// userDetails = [
//   {
//     name : 'aniket',
//     email : 'aniketgore@gmail.com',
//     phone : '9588'
//   },
//   {
//     name : 'sahebrao',
//     email : 'sahebrao@gmail.com',
//     phone : '9422'
    
//   },
//   {
//     name : 'gore',
//     email : 'gore@gmail.com',
//     phone : '9763'
//   },
//   {
//     name : 'hello',
//     email : 'hello@gmail.com',
//     phone : '4288'
//   },
//   {
//     name : 'sanket',
//     email : 'salunkesanket@gmail.com',
//     phone : '9763'
//   }
// ]

// display  = true;
// toggleOn(){
//  this.display = !this.display;
// }

// list:any[] = [];
// addTask(item:string){
// this.list.push({id:this.list.length, name:item});
// }

// RemoveTask(id:number){
// this.list = this.list.filter(item=>item)
// }

// upDate(){
//   this.data2 = Math.random();
// }
// userInfo=[
//   {
//     nam : 'Aniket gore', email : 'goreaniket100@gmail.com'
//   },
//   {
//     nam : 'sanket ', email : 'sanket@gmail.com'
//   },
//   {
//     nam : 'kishore', email : 'kishore@gmail.com' 
//   }
// ]

// data = "x";
// updateData (item:string){
//   console.warn(item)
//   this.data = item;
// }

// val = " ";
// getv(item:any){
// this.val = item;
// }
// title21={
//   name: 'buddy',
//   age: 21
// }
//  searchText : any;
// heroes =[
//   {id: 11, name: 'mr. Nice', country: 'India'},
//   {id: 12, name: 'Narco', country: 'USA'},
//   {id: 13, name: 'Bombasto', country: 'Canada'},
//   {id: 14, name: 'celeritaas', country: 'Russia'},
//   {id: 15, name: 'Magneta', country: 'China'},
//   {id: 16, name: 'Rubberman', country: 'Germany'},
//   {id: 17, name: 'Dynama', country: 'Honk Kong'},
//   {id: 18, name: 'Dr IQ', country: 'South Africa'},
//   {id: 19, name: 'Magma', country: 'Shri LAnka'},
//   {id: 20, name: 'Tornado', country: 'Uk'},
//   {id: 21, name: 'Tokyo', country: 'Japan'}
// ]

// }

// export class AppComponent implements OnInit {
//   posts:any;
//   searchText : any;
//   constructor(private service:PostService) {}
//   ngOnInit() {
//       this.service.getPosts()
//         .subscribe(response => {
//           this.posts = response;
//         });
//   }
  // userLogin(item:any){
  //   console.warn(item)
  // }
  // loginForm = new FormGroup({
  //   user : new FormControl(''),
  //   password : new FormControl('')
  // })
  // loginUser(){
  //   console.warn(this.loginForm.value)
  // }

  // get user(){
  //   return this.loginForm.get('user')
  // }

  // onClickSubmit(result : any){
  //   console.log(result.username);
    
  // }
// }