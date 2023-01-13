import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-pacijenata',
  templateUrl: './lista-pacijenata.component.html',
  styleUrls: ['./lista-pacijenata.component.scss'],
})
export class ListaPacijenataComponent implements OnInit {

  constructor(private alertController:AlertController,private router:Router) { }

  ngOnInit() {}

  async dodajDokument() {
    const alert = await this.alertController.create({
      header: 'Obavijest',
      message: 'Rezultati su uspjesno poslani',
      buttons: [{
        text:'Ok',
        handler:()=>{
          this.router.navigate(['/listaPacijenata']);
        }
      },
          
    ]
    });

  

    await alert.present();
  }

}
