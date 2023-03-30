import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  { path: '', redirectTo: 'frontend', pathMatch: 'full' },

  {path:'frontend', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
  },

  {path:'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
