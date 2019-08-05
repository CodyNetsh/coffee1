import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './page/login/login.module#LoginPageModule' },
  { path: 'order', loadChildren: './page/order/order.module#OrderPageModule' },
  { path: 'add', loadChildren: './page/add/add.module#AddPageModule' },
  { path: 'pdf', loadChildren: './page/pdf/pdf.module#PdfPageModule' },
  { path: 'confirm', loadChildren: './page/confirm/confirm.module#ConfirmPageModule' },
  { path: 'payments', loadChildren: './page/payments/payments.module#PaymentsPageModule' },
  { path: 'recipt', loadChildren: './page/recipt/recipt.module#ReciptPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
