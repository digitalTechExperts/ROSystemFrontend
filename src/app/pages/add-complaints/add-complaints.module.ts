import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddComplaintsPageRoutingModule } from './add-complaints-routing.module';

import { AddComplaintsPage } from './add-complaints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddComplaintsPageRoutingModule
  ],
  declarations: [AddComplaintsPage]
})
export class AddComplaintsPageModule {}
