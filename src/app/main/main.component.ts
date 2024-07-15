import { Component } from '@angular/core';
import MatTableDataSource from '@angular/material';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

 

export class MainComponent {

  dataa=[
    {"id":1,"name":"goutham","email":"goutham@gmail.com","phonenumber":1234567890},
    {"id":2,"name":"bharath","email":"bharath@gmail.com","phonenumber":9876543210},
    {"id":3,"name":"jayram","email":"jayram@gmail.com","phonenumber":1234567890},
    {"id":4,"name":"saisumanth","email":"saisumanth@gmail.com","phonenumber":9876543210},
    {"id":5,"name":"nani","email":"nani@gmail.com","phonenumber":1234567890},
    {"id":6,"name":"akhil","email":"akhil@gmail.com","phonenumber":1234567890}
  ]
}
