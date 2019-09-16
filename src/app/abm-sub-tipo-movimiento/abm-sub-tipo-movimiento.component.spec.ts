import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmSubTipoMovimientoComponent } from './abm-sub-tipo-movimiento.component';

describe('AbmSubTipoMovimientoComponent', () => {
  let component: AbmSubTipoMovimientoComponent;
  let fixture: ComponentFixture<AbmSubTipoMovimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmSubTipoMovimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmSubTipoMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
