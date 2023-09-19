import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'amc',
    loadChildren: () => import('./pages/amc/amc.module').then( m => m.AMCPageModule)
  },
  {
    path: 'complaints',
    loadChildren: () => import('./pages/complaints/complaints.module').then( m => m.ComplaintsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./pages/customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'organisation',
    loadChildren: () => import('./pages/organisation/organisation.module').then( m => m.OrganisationPageModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('./pages/sales/sales.module').then( m => m.SalesPageModule)
  },
  {
    path: 'add-sales',
    loadChildren: () => import('./pages/add-sales/add-sales.module').then( m => m.AddSalesPageModule)
  },
  {
    path: 'add-customers',
    loadChildren: () => import('./pages/add-customers/add-customers.module').then( m => m.AddCustomersPageModule)
  },
  {
    path: 'add-complaints',
    loadChildren: () => import('./pages/add-complaints/add-complaints.module').then( m => m.AddComplaintsPageModule)
  },
  {
    path: 'add-organisation',
    loadChildren: () => import('./pages/add-organisation/add-organisation.module').then( m => m.AddOrganisationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
