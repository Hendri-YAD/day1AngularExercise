import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PersonalDetails } from "../../model";

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {

  @ViewChild('personalDetailsForm') perDetForm: NgForm;

  @Output() newParticulars = new EventEmitter<PersonalDetails>();

  constructor() { }

  ngOnInit() {
  }

  processForm(){
    console.log("Process Form");
    console.log(this.perDetForm.value);
    this.newParticulars.next(this.perDetForm.value);
    this.perDetForm.resetForm();
  }

}
