import { Component } from '@angular/core';

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
      url: '',
      icon: 'home'
    },
    {
      title: 'Complaints',
      url: '/complaints',
      icon: 'person'
    },
    {
      title: 'AMC',
      url: '/amc',
      icon: 'person'
    }
  ];
  constructor(
  ) {
    this.initializeApp();
  }
  initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  }
}
