import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-zakazi-termin',
  templateUrl: './zakazi-termin.component.html',
  styleUrls: ['./zakazi-termin.component.scss'],
})
export class ZakaziTerminComponent implements OnInit {

  constructor( private alert:AlertController, private router:Router) {

   }

    odaberiDatum: any;

    ngOnInit() {}

  
   async odabir()
  {
    console.log(this.odaberiDatum);
    if(this.odaberiDatum=="2023-01-20T14:30:00+01:00")
    
    {
      const alert = await this.alert.create({
        header: 'Upozorenje!',
        message: 'Termin je zauzet, pokusajte drugi',
        buttons: [
          {
            text:'OK',
            handler:()=>
            {
              this.router.navigate(['/zakaziTermin']);
            }
          }
        ],
           
        
      });
      await alert.present();

    }
    else
    {
      this.router.navigate(['/UspjesnoZakazano'])



    }

  }



}
