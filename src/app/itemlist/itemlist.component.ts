import { Component } from '@angular/core';

@Component({
  selector: 'app-itemlist',
  standalone: true,
  imports: [],
  templateUrl: './itemlist.component.html',
  styleUrl: './itemlist.component.css'
})

export class ItemlistComponent {
   itemlist=[
    {"id":1,"name":"Water","cost":"$10","stockleft":10,"stockover":90},
    {"id":2,"name":"Soda","cost":"$10","stockleft":20,"stockover":80},
    {"id":3,"name":"Coke","cost":"$10","stockleft":20,"stockover":80},
    {"id":4,"name":"Sprite","cost":"$10","stockleft":40,"stockover":60},
    {"id":5,"name":"Fanta","cost":"$10","stockleft":60,"stockover":40},
    {"id":6,"name":"Pepsi","cost":"$10","stockleft":20,"stockover":80},
    {"id":7,"name":"Mango","cost":"$10","stockleft":20,"stockover":80}
  ];
  searchvalue :any="all" ;
  searchitem :string = "All";
  dataa : any[]=this.itemlist;
  

  

 

  search( event : Event){
     this.searchvalue =(event.target as HTMLInputElement).value
    this.searchitem=this.searchvalue;
    this.dataa=[]
    for(var i=0;i<this.itemlist.length;i++){
      if(this.itemlist[i].name == this.searchvalue){
        this.dataa .push(this.itemlist[i])
      }
    }
    if (this.searchvalue == "") {
      this.dataa=this.itemlist
    }
    console.log(this.dataa)
  }
}

