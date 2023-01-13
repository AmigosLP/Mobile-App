import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-registacija',
  templateUrl: './registacija.component.html',
  styleUrls: ['./registacija.component.scss'],
})
export class RegistacijaComponent implements OnInit {

  showPassword = false;
  passwordToggleIcon='eye';
 
   

    get ime()
    {
      return this.registrationForm.get('ime');
    }
    get prezime()
    {
      return this.registrationForm.get('prezime');
    }
    get email()
    {
      return this.registrationForm.get('email');
    }
    get brKartice()
    {
      return this.registrationForm.get('brKartice');
    }
    get lozinka()
    {
      return this.registrationForm.get('lozinka');
    }
 
    public errorMessages={

      ime:[
        {type:'required',message:'Unos imena je obavezno'},
        {type:'text',message:'Unesite validno ime'}
       ],
      prezime:[
        {type:'required',message:'Unos prezimena je obavezno'},
        {type:'text',message:'Unesite validno prezime'}
       ],
      email:[
        {type:'required',message:'Unos email-a je obavezno'},
        {type:'email',message:'Unesite validan email'}
       ],
      brKartice:[
       {type:'required',message:'Broj kartice je obavezan'},
       {type:'maxLength',message:'Broj kartice ne smije biti duzi od 6 brojeva'}
      ],
      lozinka:[
        {type:'required',message:'Lozinka je obavezana'},
        {type:'password',message:'Unesite ispravnu lozinku'}
      ]
     
  }
   

  registrationForm=this.formBuilder.group({
    ime:['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
    prezime:['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
    email:['',[Validators.required,Validators.email]],
    brKartice:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(6)]],
    lozinka:['',[Validators.required]]

  });


  constructor(private formBuilder:FormBuilder,private router:Router,private alertController:AlertController) { }

  ngOnInit() {}
  public submit(){
    console.log(this.registrationForm.value);
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
   async registrujSe()
   {
    
    
      this.router.navigate(['/UspjesnoRegistrovano']);
      console.log(this.registrationForm.value);
      this.registrationForm.reset();
       
     
   }

}
