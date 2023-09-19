import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

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

  onAddComplaints(){
    this.router.navigate(['/add-complaints'])
  }

}
