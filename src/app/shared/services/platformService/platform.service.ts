import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  public deviceUsed: string;
  public channel: number;

  constructor(
    private platform: Platform,
  ) {
    this.deviceUsed = this.getDeviceUsed();
  }

  public isIpad(): boolean {
    return this.platform.is('ipad');
  }

  public isIphone(): boolean {
    return this.platform.is('iphone');
  }

  // Android Cellphone
  public isAndroid(): boolean {
    return this.platform.is('android') && !this.platform.is('tablet');
  }

  // Android tablet
  public isTablet(): boolean {
    return this.platform.is('tablet');
  }

  public getDeviceUsed(): string {
    let device = null;

    if (this.isIpad()) device = 'ipad';
    else if (this.isIphone()) device = 'iphone';
    else if (this.isAndroid()) device = 'android';
    else if (this.isTablet()) device = 'tablet';

    this.setChannel(device);

    return device;
  }

  private setChannel(device: string) {
    let channel: number;

    switch (device) {
      case 'iphone':
        channel = 1;
        break;

      case 'android':
        channel = 2;
        break;
        
      case 'ipad':
        channel = 3;
        break;

      case 'tablet':
        channel = 4;
        break;
    
      default:
        channel = 2;
        break;
    }

    this.channel = channel;
  }
}
