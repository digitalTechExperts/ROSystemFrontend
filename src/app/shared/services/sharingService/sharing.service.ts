import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  
  private guestDetails = new BehaviorSubject<any>(null);
  currentGuestDetails = this.guestDetails.asObservable();
  
  constructor(
  ) {
    this.init();
  }
  
  private async init() {
  }

  setGuestDetails(details: any) {
    this.guestDetails.next(details);
  }

  clearUserInteractions(){
    this.setGuestDetails(null);
    console.log("clear all user interatcions from shared service");
  }

}
