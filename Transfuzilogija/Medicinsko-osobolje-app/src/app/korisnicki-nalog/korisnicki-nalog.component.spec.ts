import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KorisnickiNalogComponent } from './korisnicki-nalog.component';

describe('KorisnickiNalogComponent', () => {
  let component: KorisnickiNalogComponent;
  let fixture: ComponentFixture<KorisnickiNalogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisnickiNalogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KorisnickiNalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
