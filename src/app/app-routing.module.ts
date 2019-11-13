import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {LancamentosComponent} from './lancamentos/lancamentos.component';


const routes: Routes = [

{
  path: '',
  Component: AppComponent
},
{
  path: 'index',
  Component: AppComponent
},
{
  path: 'home',
  Component: AppComponent
},
{
  path: 'Lancamentos',
  Component: AppComponent
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
