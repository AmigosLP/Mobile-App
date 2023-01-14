import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { KorisnickiNalogComponent } from './korisnicki-nalog/korisnicki-nalog.component';
import { LicniPodaciComponent } from './licni-podaci/licni-podaci.component';
import { ListaPacijenataComponent } from './lista-pacijenata/lista-pacijenata.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostavkeComponent } from './postavke/postavke.component';
import { PregledZahtjevaComponent } from './pregled-zahtjeva/pregled-zahtjeva.component';
import { RezultatiAnalizeComponent } from './rezultati-analize/rezultati-analize.component';
import { ZaboraviLozinku2Component } from './zaboravi-lozinku2/zaboravi-lozinku2.component';
import { ZahtjevComponent } from './zahtjev/zahtjev.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'glavnaStranica',component:MainPageComponent
  },
  {
    path:'listaPacijenata',component:ListaPacijenataComponent
  },
  {
    path:'pregledZahtjeva',component:PregledZahtjevaComponent
  },
  {
    path:'zahtjev',component:ZahtjevComponent
  },
  {
     path:'rezultatiAnalize',component:RezultatiAnalizeComponent    
  },
  {
    path:'korisnickiNalog',component:KorisnickiNalogComponent
  },
  {
    path:'licniPodaci',component:LicniPodaciComponent
  },
  {
    path:'postavke',component:PostavkeComponent
  },
  {
    path:"ZaboraviLozinku2",component:ZaboraviLozinku2Component
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
