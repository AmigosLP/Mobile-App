import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetaljniZahtjevComponent } from './detaljni-zahtjev.component';

describe('DetaljniZahtjevComponent', () => {
  let component: DetaljniZahtjevComponent;
  let fixture: ComponentFixture<DetaljniZahtjevComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaljniZahtjevComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetaljniZahtjevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
