import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZaboraviLozinku2Component } from './zaboravi-lozinku2.component';

describe('ZaboraviLozinku2Component', () => {
  let component: ZaboraviLozinku2Component;
  let fixture: ComponentFixture<ZaboraviLozinku2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaboraviLozinku2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZaboraviLozinku2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
