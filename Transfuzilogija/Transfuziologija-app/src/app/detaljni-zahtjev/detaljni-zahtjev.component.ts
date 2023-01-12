import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { stringify } from 'querystring';

@Component({
  selector: 'app-detaljni-zahtjev',
  templateUrl: './detaljni-zahtjev.component.html',
  styleUrls: ['./detaljni-zahtjev.component.scss'],
})
export class DetaljniZahtjevComponent implements OnInit {

  constructor(private alertController:AlertController, private router:Router) { 


  }

  
  textarea:any;

  ngOnInit() {}

  async prihvati() {
   
    
    if(!this.textarea || this.textarea.length==0)
    {
      const alert = await this.alertController.create({
        header: 'Upozorenje!',
        message: 'Morate unijeti zahtjev koji zelite!',
        buttons: [
          {
            text:'OK',
            handler:()=>
            {
              this.router.navigate(['/DetaljniZahtjev']);
            }
          }
        ],
           
        
      });
  
      await alert.present();
    }
    else
    {
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
    this.textarea="";
   
    
    
  }

}
