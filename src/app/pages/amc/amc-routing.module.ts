import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AMCPage } from './amc.page';

const routes: Routes = [
  {
    path: '',
    component: AMCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AMCPageRoutingModule {}
