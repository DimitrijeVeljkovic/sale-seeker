import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsByGenderComponent } from './components/products-by-gender/products-by-gender.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'male', component: ProductsByGenderComponent, data: { gender: 'MALE' } },
  { path: 'female', component: ProductsByGenderComponent, data: { gender: 'FEMALE' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
