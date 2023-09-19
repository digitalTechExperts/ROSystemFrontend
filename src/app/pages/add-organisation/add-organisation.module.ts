import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOrganisationPageRoutingModule } from './add-organisation-routing.module';

import { AddOrganisationPage } from './add-organisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddOrganisationPageRoutingModule
  ],
  declarations: [AddOrganisationPage]
})
export class AddOrganisationPageModule {}
