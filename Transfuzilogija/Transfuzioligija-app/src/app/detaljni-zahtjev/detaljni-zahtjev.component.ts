import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detaljni-zahtjev',
  templateUrl: './detaljni-zahtjev.component.html',
  styleUrls: ['./detaljni-zahtjev.component.scss'],
})
export class DetaljniZahtjevComponent implements OnInit {

  constructor(private alertController:AlertController, private router:Router) { 


  }

  ngOnInit() {}

  async prihvati() {
    const alert = await this.alertController.create({
      header: 'Potvrda!',
      message: 'Medicinska sluzba ce uvaziti vas zahtjev, hvala!',
      buttons: [
        {
          text:'OK',
          handler:()=>
          {
            this.router.navigate(['/glavnaStranica']);
          }
        }
      ],
      
           
      
    });

    await alert.present();
  }

}
