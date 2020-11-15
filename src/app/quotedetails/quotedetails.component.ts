import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {
  @Input() quote:Quotes;
  @Output() isDelete= new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isDelete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
