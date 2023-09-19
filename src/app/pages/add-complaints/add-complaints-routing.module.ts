import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComplaintsPage } from './add-complaints.page';

const routes: Routes = [
  {
    path: '',
    component: AddComplaintsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddComplaintsPageRoutingModule {}
