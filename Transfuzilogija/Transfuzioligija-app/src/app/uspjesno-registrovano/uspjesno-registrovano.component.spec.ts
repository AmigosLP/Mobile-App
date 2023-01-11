import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UspjesnoRegistrovanoComponent } from './uspjesno-registrovano.component';

describe('UspjesnoRegistrovanoComponent', () => {
  let component: UspjesnoRegistrovanoComponent;
  let fixture: ComponentFixture<UspjesnoRegistrovanoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UspjesnoRegistrovanoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UspjesnoRegistrovanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
