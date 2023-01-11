import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-zahtjev',
  templateUrl: './zahtjev.component.html',
  styleUrls: ['./zahtjev.component.scss'],
})
export class ZahtjevComponent implements OnInit {

  constructor(public alertController:AlertController, private router:Router) { }

  ngOnInit() {}

  async prihvati() {
    const alert = await this.alertController.create({
      header: 'Potvrda!',
      message: 'Prihvatate termin.',
      buttons: [
        {
          text:'OK',
          handler:()=>
          {
            this.router.navigate(['/pregledZahtjeva']);
          }
        }
      ],
      
           
      
    });

    await alert.present();
  }
  async Odbij() {
    const alert = await this.alertController.create({
      header: 'Upozorenje!',
      message: 'Da li ste sigurni da zelite odbiti termin',
      buttons: [{
        text:'Da',
        handler:()=>
        {
          this.router.navigate(['/pregledZahtjeva']);
        }
      },
      {
        text:'Ne',
        handler:()=>
        {
          this.router.navigate(['/zahtjev']);
        }
      }
    ],
      
      
           
      
    });

    await alert.present();
  }

}
