import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes' 


@Component({
  selector: 'app-qoutes',
  templateUrl: './qoutes.component.html',
  styleUrls: ['./qoutes.component.css']
})
export class QoutesComponent implements OnInit {
  // public maxCount =0;
  quotes:Quotes[] =[
    new Quotes(1, 'Joshua J. Marine','eggle','Challenges are what make life interesting and overcoming them is what makes life meaningful',new Date(2020,11,1,) ),
    new Quotes(2, ' Oprah Winfrey','danius','Doing the best at this moment puts you in the best place for the next moment',new Date(2020,11,2,) ),

  ];
  toggleDetails(index){
    this.quotes[index].showDescription= ! this.quotes[index].showDescription
  }
  deleteQuote(isDelete,index){
    if(isDelete){
           this.quotes.splice(index,1)
      
    }
  }
  addNewQuote(quote){
    let quotelength =this.quotes.length;
    quote.id =quotelength+1;
    quote.dDate = new Date (quote.dDate)
    this.quotes.push(quote)
  }


  constructor() { }

  ngOnInit(): void {
  }

}

