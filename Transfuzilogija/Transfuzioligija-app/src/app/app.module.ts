import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterLink, RouterLinkActive } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';



import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
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


@NgModule({
  declarations: [AppComponent,LoginPageComponent,RegistacijaComponent,OAplikacijiComponent,MainPageComponent,ZakaziTerminComponent,UspjesnoZakazanoComponent,DetaljniZahtjevComponent,PrethodniTerminiComponent,SlikaTerminComponent,IskaznicaComponent,UspjesnoRegistrovanoComponent,KorisnickiNalogComponent,LicniPodaciComponent,PrivatnostComponent,PostavkeComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  //router:[RouterLink],
})
export class AppModule {}
