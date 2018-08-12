import { Component } from '@angular/core';

import { PersonalDetails } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  personalDetailsList: PersonalDetails[] = [];

  processForm(personalParticulars: PersonalDetails){
    this.personalDetailsList.unshift(personalParticulars);
  }

  deleteForm(index: number){
    this.personalDetailsList.splice(index, 1);
  }

}
