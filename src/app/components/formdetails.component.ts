import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PersonalDetails } from "../model";

@Component({
  selector: 'app-formdetails',
  templateUrl: './formdetails.component.html',
  styleUrls: ['./formdetails.component.css']
})
export class FormdetailsComponent implements OnInit {

  @Input() personalDetails: PersonalDetails;
  @Input() pos: number;

  @Output() deleteParticulars = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteItem(i: number) {
    //console.log('> deleting item: ', i);
    this.deleteParticulars.next(i);
  }

}
