import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  {

  
  get medicinskiID()
  {
    return this.loginMed.get('medicinskiID');
  }
get lozinka()
  {
    return this.loginMed.get('lozinka');
  }
  public errorMessages={

    medicinskiID:[
       {type:'required',message:'Broj Medicinskog ID je obavezan'},
       {type:'maxLength',message:'Broj Medicinskog ID ne smije biti duzi od 6 brojeva'}
      ],
      lozinka:[
        {type:'required',message:'Lozinka je obavezana'},
        {type:'password',message:'Unesite ispravnu lozinku'}
      ]
     
  }




loginMed=this.formBuilder.group({
  medicinskiID:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(6)]],
  lozinka:['',[Validators.required]],

});



  constructor(private formBuilder:FormBuilder,private router:Router,private alertController:AlertController) { }

 
  public submit()
  {
    console.log(this.loginMed.value);
  }
  async prijava()
  {
    if(this.medicinskiID?.value=="123456" && this.lozinka?.value==="nesto")
    {
     /* const alert = await this.alertController.create({
        header: 'Uspjesno :)',
        message: 'Uspjesna prijava',
        buttons: [{
          text:'Ok',
          handler:()=>{
          }
        },
        
      ]
    });*/
    
    this.router.navigate(['/glavnaStranica']);
      
      //await alert.present();
      
     
    }
    else
    {
      const alert = await this.alertController.create({
        header: 'Upozorenje',
        subHeader: 'Vasa lozinka ili Vas medicinski ID nije validan',
        message: 'Molimo vas unesite ponovo.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    this.medicinskiID?.reset();
    this.lozinka?.reset();
  }

}
