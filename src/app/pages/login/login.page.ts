import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public login = {
    contact: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onSubmit(){
    console.log('Login Data:', this.login);
    this.router.navigate(['/home'])
  }

}
