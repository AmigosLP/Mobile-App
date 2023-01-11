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

@NgModule({
  declarations: [AppComponent,LoginPageComponent,RegistacijaComponent,OAplikacijiComponent,MainPageComponent,ZakaziTerminComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  //router:[RouterLink],
})
export class AppModule {}
