import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmTipoPagoComponent } from './abm-tipo-pago.component';

describe('AbmTipoPagoComponent', () => {
  let component: AbmTipoPagoComponent;
  let fixture: ComponentFixture<AbmTipoPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmTipoPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmTipoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
