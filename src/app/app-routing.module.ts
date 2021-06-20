import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  AddProductComponent
} from './components/add-product/add-product.component';
import {
  AllMembersComponent
} from './components/all-members/all-members.component';
import { HomeComponent } from './components/home/home.component';
import {
  PageNotFoundComponent
} from './components/page-not-found/page-not-found.component';
import {
  SearchProductComponent
} from './components/search-product/search-product.component';
import {
  ShowProductComponent
} from './components/show-product/show-product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'showproduct', component: ShowProductComponent},
  {path: 'searchproduct', component: SearchProductComponent},
  {path: 'addproduct', component: AddProductComponent},
  {path: 'allmembers', component: AllMembersComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent, 
  ShowProductComponent, 
  SearchProductComponent, 
  AddProductComponent, 
  AllMembersComponent,
  PageNotFoundComponent
];