import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PregledZahtjevaComponent } from './pregled-zahtjeva.component';

describe('PregledZahtjevaComponent', () => {
  let component: PregledZahtjevaComponent;
  let fixture: ComponentFixture<PregledZahtjevaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledZahtjevaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PregledZahtjevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
