import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistacijaComponent } from './registacija/registacija.component';
import { OAplikacijiComponent } from './o-aplikaciji/o-aplikaciji.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ZakaziTerminComponent } from './zakazi-termin/zakazi-termin.component';

const routes: Routes = [
  {
    path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  
  
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'login',component:LoginPageComponent
  },
  {
    path:'registracija',component:RegistacijaComponent
  },
  {
    path:'aplikacija',component:OAplikacijiComponent
  },
  {
    path:'glavnaStranica',component:MainPageComponent
  },
  {
    path:'zakaziTermin',component:ZakaziTerminComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
