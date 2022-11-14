import { Pagina2Component } from './../Components/pagina2/pagina2.component';
import { HomeComponent } from './../Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina3Component } from 'src/Components/pagina3/pagina3.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path:'pagina2', component: Pagina2Component
  },
  {
    path:'pagina3', component: Pagina3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
