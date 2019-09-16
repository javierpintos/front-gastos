import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmTipoMovimientoComponent } from './abm-tipo-movimiento.component';

describe('AbmTipoMovimientoComponent', () => {
  let component: AbmTipoMovimientoComponent;
  let fixture: ComponentFixture<AbmTipoMovimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmTipoMovimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmTipoMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
