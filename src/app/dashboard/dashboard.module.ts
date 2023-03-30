import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardcComponent } from './dashboardc/dashboardc.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { AboutformComponent } from './aboutform/aboutform.component';
import { SliderformComponent } from './sliderform/sliderform.component';


@NgModule({
  declarations: [
    DashboardcComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    UserlistComponent,
    ProductlistComponent,
    LoginComponent,
    AddproductComponent,
    AboutComponent,
    AboutformComponent,
    SliderformComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,HttpClientModule
  ]
})
export class DashboardModule { }
