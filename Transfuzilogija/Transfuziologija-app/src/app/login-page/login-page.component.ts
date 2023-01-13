import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent  {
  showPassword = false;
  passwordToggleIcon='eye';

    get brKartice()
    {
      return this.loginForm.get('brKartice');
    }
  get lozinka()
    {
      return this.loginForm.get('lozinka');
    }
    public errorMessages={

        brKartice:[
         {type:'required',message:'Broj kartice je obavezan'},
         {type:'maxLength',message:'Broj kartice ne smije biti duzi od 6 brojeva'}
        ],
        lozinka:[
          {type:'required',message:'Lozinka je obavezana'},
          {type:'password',message:'Unesite ispravnu lozinku'}
        ]
       
    }




  loginForm=this.formBuilder.group({
      brKartice:['',[Validators.required,Validators.maxLength(6)]],
      lozinka:['',[Validators.required]],

  });

  constructor(private formBuilder:FormBuilder,private router:Router,private alertController:AlertController) { }

  public submit()
  {
    console.log(this.loginForm.value);
  }
  togglePassword():void{
    this.showPassword=!this.showPassword;
    if(this.passwordToggleIcon=='eye-off')
    {
     this.passwordToggleIcon='eye'
    }
    else
    {
     this.passwordToggleIcon='eye-off';
    }
  } 
   async prijava()
  {
    if(this.brKartice?.value=="123456" && this.lozinka?.value==="nesto")
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
        subHeader: 'Vasa lozinka ili Vas broj kartice nije validan',
        message: 'Molimo vas unesite ponovo.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    this.brKartice?.reset();
    this.lozinka?.reset();
  }

}
