import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ContactComponent} from './contact/contact.component';
import {EjerciciosComponent} from './ejercicios/ejercicios.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    // ng g c home
    path: 'home',
    component: HomeComponent
  },
  {
    // ng g c home
    path: 'products',
    component: ProductsComponent
  },
  {
    // ng g c home
    path: 'contact',
    component: ContactComponent
  },
  {
    // ng g c home
    path: 'ejercicios',
    component: EjerciciosComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
