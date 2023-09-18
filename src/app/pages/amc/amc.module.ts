import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AMCPageRoutingModule } from './amc-routing.module';

import { AMCPage } from './amc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AMCPageRoutingModule
  ],
  declarations: [AMCPage]
})
export class AMCPageModule {}
