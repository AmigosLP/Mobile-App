import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZaboraviLozinkuComponent } from './zaboravi-lozinku.component';

describe('ZaboraviLozinkuComponent', () => {
  let component: ZaboraviLozinkuComponent;
  let fixture: ComponentFixture<ZaboraviLozinkuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaboraviLozinkuComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZaboraviLozinkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
