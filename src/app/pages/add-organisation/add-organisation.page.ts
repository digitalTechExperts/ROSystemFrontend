import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-organisation',
  templateUrl: './add-organisation.page.html',
  styleUrls: ['./add-organisation.page.scss'],
})
export class AddOrganisationPage implements OnInit {
  public organisation = {
    name: '',
    address: '',
    details: '',
    gst:''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("organisation details", this.organisation)
  }


}
