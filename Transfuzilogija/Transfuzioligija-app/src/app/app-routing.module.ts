import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistacijaComponent } from './registacija/registacija.component';
import { OAplikacijiComponent } from './o-aplikaciji/o-aplikaciji.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ZakaziTerminComponent } from './zakazi-termin/zakazi-termin.component';
import { UspjesnoZakazanoComponent } from './uspjesno-zakazano/uspjesno-zakazano.component';
import { DetaljniZahtjevComponent } from './detaljni-zahtjev/detaljni-zahtjev.component';
import { PrethodniTerminiComponent } from './prethodni-termini/prethodni-termini.component';
import { SlikaTerminComponent } from './slika-termin/slika-termin.component';
import { IskaznicaComponent } from './iskaznica/iskaznica.component';
import { UspjesnoRegistrovanoComponent } from './uspjesno-registrovano/uspjesno-registrovano.component';
import { KorisnickiNalogComponent } from './korisnicki-nalog/korisnicki-nalog.component';
import { LicniPodaciComponent } from './licni-podaci/licni-podaci.component';
import { PrivatnostComponent } from './privatnost/privatnost.component';
import { PostavkeComponent } from './postavke/postavke.component';


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
  },
  {
    path:'UspjesnoZakazano',component:UspjesnoZakazanoComponent
  },
  {
    path:"DetaljniZahtjev",component:DetaljniZahtjevComponent
  },
  {
    path:"PrethodniTermini",component:PrethodniTerminiComponent
  },
  {
    path:"SlikaTermin",component:SlikaTerminComponent
  },
  {
    path:"Iskaznica",component:IskaznicaComponent
  },
  {
    path:"UspjesnoRegistrovano",component:UspjesnoRegistrovanoComponent
  },
  {
   path:"KorisnickiNalog",component:KorisnickiNalogComponent
  },
  {
    path:"LicniPodaci",component:LicniPodaciComponent
  },
  {
    path:"Privatnost",component:PrivatnostComponent
  },
  {
    path:"Postavke",component:PostavkeComponent
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
