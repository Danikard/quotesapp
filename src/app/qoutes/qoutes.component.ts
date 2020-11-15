import { Component, OnInit } from '@angular/core';
import {Qoutes} from '../Qoutes' 


@Component({
  selector: 'app-qoutes',
  templateUrl: './qoutes.component.html',
  styleUrls: ['./qoutes.component.css']
})
export class QoutesComponent implements OnInit {
  public maxCount =0;
  
  quotes =[
    new Qoutes(1, 'Joshua J. Marine','eggle','Challenges are what make life interesting and overcoming them is what makes life meaningful'
    ,new Date(2020,11,1,) ,0,0),
    new Qoutes(1, ' Oprah Winfrey','danius','Doing the best at this moment puts you in the best place for the next moment'
    ,new Date(2020,11,2,) ,0,0),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
