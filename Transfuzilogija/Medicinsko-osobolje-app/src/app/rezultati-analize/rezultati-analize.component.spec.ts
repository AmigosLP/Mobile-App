import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RezultatiAnalizeComponent } from './rezultati-analize.component';

describe('RezultatiAnalizeComponent', () => {
  let component: RezultatiAnalizeComponent;
  let fixture: ComponentFixture<RezultatiAnalizeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RezultatiAnalizeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RezultatiAnalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
