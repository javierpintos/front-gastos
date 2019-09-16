import { Component, OnInit } from '@angular/core';
import { MovimientosService } from '../Service/movimientos.service';

@Component({
  selector: 'app-abm-sub-tipo-movimiento',
  templateUrl: './abm-sub-tipo-movimiento.component.html',
  styleUrls: ['./abm-sub-tipo-movimiento.component.css']
})
export class AbmSubTipoMovimientoComponent implements OnInit {
  title = 'java-front';
  public newSubTipoMovimiento: any;
  public subTipoMovimiento_guardado;

  constructor(
    private _movimientosService: MovimientosService
  ) { 
    this.newSubTipoMovimiento = {
      "id": "",
      "descripcion": ""
  };
  }

  ngOnInit() {
  }

  onSubmit(form){

    this._movimientosService.addSubTipoMovimiento(this.newSubTipoMovimiento).subscribe(
      response => {
        this.subTipoMovimiento_guardado = response;
        console.log(this.subTipoMovimiento_guardado);
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}

