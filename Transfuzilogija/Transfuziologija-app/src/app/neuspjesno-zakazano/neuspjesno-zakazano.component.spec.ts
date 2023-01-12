import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NeuspjesnoZakazanoComponent } from './neuspjesno-zakazano.component';

describe('NeuspjesnoZakazanoComponent', () => {
  let component: NeuspjesnoZakazanoComponent;
  let fixture: ComponentFixture<NeuspjesnoZakazanoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuspjesnoZakazanoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NeuspjesnoZakazanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
