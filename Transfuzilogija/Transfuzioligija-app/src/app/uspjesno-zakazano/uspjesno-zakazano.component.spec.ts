import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UspjesnoZakazanoComponent } from './uspjesno-zakazano.component';

describe('UspjesnoZakazanoComponent', () => {
  let component: UspjesnoZakazanoComponent;
  let fixture: ComponentFixture<UspjesnoZakazanoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UspjesnoZakazanoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UspjesnoZakazanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
