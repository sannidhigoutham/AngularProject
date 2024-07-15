import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {MatTableModule} from '@angular/material/table'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproject';
  dataSource =values;
 }
 const values: data[] =[
  {id:1,name:"goutham",email:"goutham@gmail.com",phonenumber:1234567890},
  {id:2,name:"bharath",email:"bharath@gmail.com",phonenumber:9876543210},
  {id:3,name:"jayram",email:"jayram@gmail.com",phonenumber:1234567890},
  {id:4,name:"saisumanth",email:"saisumanth@gmail.com",phonenumber:9876543210},
  {id:5,name:"nani",email:"nani@gmail.com",phonenumber:1234567890},
  {id:6,name:"akhil",email:"akhil@gmail.com",phonenumber:1234567890}
]
 export interface data {
   id :number,
   name: string,
   email:string,
   phonenumber:number
 }