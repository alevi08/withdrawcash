import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'wdc-main',
    loadComponent: () => import("../wdc-main/wdc-main.component").then(m => m.WdcMainComponent),

  },
  {
    path: 'wdc-screen-1',
    loadComponent: () => import("../wdc-screen-1/wdc-screen-1.component").then(m => m.WdcScreen1Component),
  },
  {
    path: 'wdc-screen-2',
    loadComponent: () => import("../wdc-screen-2/wdc-screen-2.component").then(m => m.WdcScreen2Component),
  },
  {
    path: 'wdc-screen-3',
    loadComponent: () => import("../wdc-screen-3/wdc-screen-3.component").then(m => m.WdcScreen3Component),
  },
  {
    path: 'wdc-screen-4',
    loadComponent: () => import("../wdc-screen-4/wdc-screen-4.component").then(m => m.WdcScreen4Component),
  },
  {
    path: 'wdc-screen-5-custom-amount',
    loadComponent: () => import("../wdc-screen-5-custom-amount/wdc-screen-5-custom-amount.component").then(m => m.WdcScreen5CustomAmountComponent),
  },
  {
    path: 'wdc-screen-6',
    loadComponent: () => import("../wdc-screen-6/wdc-screen-6.component").then(m => m.WdcScreen6Component),
  },
  {
    path: 'wdc-screen-cancel',
    loadComponent: () => import("../wdc-screen-cancel/wdc-screen-cancel.component").then(m => m.WdcScreenCancelComponent),
  },
  {
    path: 'wdc-screen-read-error',
    loadComponent: () => import("../wdc-screen-read-error/wdc-screen-read-error.component").then(m => m.WdcScreenReadErrorComponent),
  },
  {
    path: '**',
    redirectTo: 'wdc-screen-1',
  }

];
