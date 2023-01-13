import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-zaboravi-lozinku',
  templateUrl: './zaboravi-lozinku.component.html',
  styleUrls: ['./zaboravi-lozinku.component.scss'],
})
export class ZaboraviLozinkuComponent implements OnInit {

  constructor(private alertController:AlertController, private router:Router) { 

  }

   
  textarea:any;

  ngOnInit() {}

  async prihvati() {
   
    
    if(!this.textarea || this.textarea.length==0)
    {
     
      //alert("Molimo Vas unesite vas Email.")
      const alert= await this.alertController.create({
        header:'Potvrda!',
        message:"Molimo Vas unesite vas Email.",
        buttons: [
          {
            text:'OK',
            handler:()=>
            {
              this.router.navigate(['/ZaboraviLozinku']);
            }
          }
            
        ]

      });
     
      await alert.present();
    }
    else
    {
      const alert = await this.alertController.create({
        header: 'Potvrda!',
        message: 'Kod za obnovu Vase lozinke je poslan na Vas Email racun',
        buttons: [
          {
            text:'OK',
            handler:()=>
            {
              this.router.navigate(['/login']);
            }
          }
        ],
           
        
      });
  
      await alert.present();

    }
    this.textarea="";
   
    
    
  }
  
}
