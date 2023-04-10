import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { FormComponent } from './form/form.component';
import { ReuseTableComponent } from './reuse-table/reuse-table.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';

const routes: Routes = [
  // {
  //   path : '',
  //   component : HomeComponent
  // },
  {
    path: 'seller-auth',
    component : SellerAuthComponent
  },
  {
    path: 'forms',
    component: FormComponent
  },
  {
    path : 'table',
    component : ReuseTableComponent
  },
  {
    path : 'header',
    component : HeaderComponent
  },
];

@NgModule({
  imports  : [ RouterModule.forRoot(routes)],
  exports  : [RouterModule]
})
export class AppRoutingModule { }
