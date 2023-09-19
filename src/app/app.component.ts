import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle = 'Dashboard';
  activeIndex = 0;
  Pages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Organisation',
      url: '/organisation',
      icon: 'person'
    },
    {
      title: 'Customer',
      url: '/customers',
      icon: 'person'
    },
    {
      title: 'Sales',
      url: '/sales',
      icon: 'person'
    },
    {
      title: 'AMC',
      url: '/amc',
      icon: 'person'
    },
    {
      title: 'Complaints',
      url: '/complaints',
      icon: 'person'
    }
  ];
  
  constructor(
    private router: Router
  ) {
    this.initializeApp();
  }
  initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  this.router.navigate(['/login'])
  }
}
