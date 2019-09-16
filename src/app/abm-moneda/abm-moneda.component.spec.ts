import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmMonedaComponent } from './abm-moneda.component';

describe('AbmMonedaComponent', () => {
  let component: AbmMonedaComponent;
  let fixture: ComponentFixture<AbmMonedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmMonedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
