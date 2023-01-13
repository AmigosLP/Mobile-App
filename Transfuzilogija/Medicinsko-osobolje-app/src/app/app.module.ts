import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ListaPacijenataComponent } from './lista-pacijenata/lista-pacijenata.component';
import { PregledZahtjevaComponent } from './pregled-zahtjeva/pregled-zahtjeva.component';
import { ZahtjevComponent } from './zahtjev/zahtjev.component';
import { RezultatiAnalizeComponent } from './rezultati-analize/rezultati-analize.component';
import { KorisnickiNalogComponent } from './korisnicki-nalog/korisnicki-nalog.component';
import { LicniPodaciComponent } from './licni-podaci/licni-podaci.component';
import { PostavkeComponent } from './postavke/postavke.component';

@NgModule({
  declarations: [AppComponent,LoginComponent,MainPageComponent,ListaPacijenataComponent,PregledZahtjevaComponent,ZahtjevComponent,RezultatiAnalizeComponent,KorisnickiNalogComponent,LicniPodaciComponent,PostavkeComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },FormsModule,ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
