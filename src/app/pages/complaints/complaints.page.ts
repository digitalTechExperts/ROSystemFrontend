import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.page.html',
  styleUrls: ['./complaints.page.scss'],
})
export class ComplaintsPage implements OnInit {

  public customer = {
    name: '',
    email: '',
    phone: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Customer Data:', this.customer);
    // Reset the form after submission
    this.customer = {
      name: '',
      email: '',
      phone: ''
    };
  }

}
