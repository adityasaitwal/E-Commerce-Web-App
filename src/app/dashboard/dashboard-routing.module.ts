import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutformComponent } from './aboutform/aboutform.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DashboardcComponent } from './dashboardc/dashboardc.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SliderformComponent } from './sliderform/sliderform.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [

  {
    path: '', component: DashboardcComponent,

    children: [
      { path: 'sidenav', component: SidenavComponent },
      { path: 'home', component: HomeComponent },
      { path: 'userlist', component: UserlistComponent },
      { path: 'productlist', component: ProductlistComponent },
      { path: 'addproduct', component: AddproductComponent },
      { path: 'updatedata/:id', component: AddproductComponent },
      { path: 'about', component: AboutComponent },
      { path: 'aboutform', component: AboutformComponent },
      { path: 'update/:id', component: AboutformComponent },
      { path: 'sliderform', component:SliderformComponent }

    ]

  },

  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
