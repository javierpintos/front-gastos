import { Component, OnInit } from '@angular/core';
//import { Moneda } from '../Model/Moneda.model';
import { MovimientosService } from '../Service/movimientos.service';

@Component({
  selector: 'app-abm-tipo-movimiento',
  templateUrl: './abm-tipo-movimiento.component.html',
  styleUrls: ['./abm-tipo-movimiento.component.css']
})
export class AbmTipoMovimientoComponent implements OnInit {
  title = 'java-front';
  public newTipoMovimiento: any;
  public tipoMovimiento_guardado;

  constructor(
    private _movimientosService: MovimientosService
  ) { 
    this.newTipoMovimiento = {
      "id": "",
      "descripcion": ""
  };
  }

  ngOnInit() {
  }

  onSubmit(form){

    this._movimientosService.addTipoMovimiento(this.newTipoMovimiento).subscribe(
      response => {
        this.tipoMovimiento_guardado = response;
        console.log(this.tipoMovimiento_guardado);
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
