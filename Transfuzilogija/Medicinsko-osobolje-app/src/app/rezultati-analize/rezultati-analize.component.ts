import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-rezultati-analize',
  templateUrl: './rezultati-analize.component.html',
  styleUrls: ['./rezultati-analize.component.scss'],
})
export class RezultatiAnalizeComponent implements OnInit {

  //private file: File;
  constructor(private alertController:AlertController,private router:Router) { }

  ngOnInit() {}


  async dodajDokument() {
    const alert = await this.alertController.create({
      header: 'Obavijest',
      message: 'Zelite li dodati dokument ?',
      buttons: [{
        text:'Da',
        handler:()=>{
          this.router.navigate(['/rezultatiAnalize']);
        }
      },
      {
        text:'Ne',
        handler:()=>{
          this.router.navigate(['/listaPacijenata']);
        }
      }
    
    ]
    });

    await alert.present();
  
  
  }
  async sacuvajDokument()
  {
    const alert=await this.alertController.create({
       header:'Sacuvaj dokument',
       message:'Da li zelite sacuvati dokument ?',
       buttons:[
        {
          text:'Da',
          handler:()=>
          {
            this.router.navigate(['/listaPacijenata']);
            /*const alert=this.alertController.create({
              header:'Uspjesno sacuvano'});*/
          },
       
         


        },
        {
          text:'Ne',
          handler:()=>
          {
            this.router.navigate(['/rezultatiAnalize']);
           
          },
        }
    
        ]


    });
    await alert.present();
  }

}
