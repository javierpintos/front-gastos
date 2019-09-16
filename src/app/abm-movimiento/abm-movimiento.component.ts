import { Component, OnInit, QueryList } from '@angular/core';
import { Moneda } from '../Model/Moneda.model';
import { TipoMovimiento } from '../Model/TipoMovimiento.model';
import { SubTipoMovimiento } from '../Model/SubTipoMovimiento.model';
import { TipoPago } from '../Model/TipoPago.model';
import { MovimientosService } from '../Service/movimientos.service';

@Component({
  selector: 'app-abm-movimiento',
  templateUrl: './abm-movimiento.component.html',
  styleUrls: ['./abm-movimiento.component.css']
})
export class AbmMovimientoComponent implements OnInit {
  title = 'java-front';
  public newMovimiento: any;
  public movimiento_guardado;

  public listTipoMovimiento: TipoMovimiento;
  public listSubTipoMovimiento: SubTipoMovimiento;
  public listTipoPago: TipoPago;
  public listMoneda: Moneda;

  constructor(
    private _movimientosService: MovimientosService
  ) { 
    this.newMovimiento = {
      "fecha": "",
      "fechaVencimiento": "",
      "monto": "",
      "descripcion": "",
      "TipoMovimiento": "",
      "subTipoMovimiento": "",
      "cotizacion": "",
      "moneda": "",
      "tipoPago": "",
      "cliente": "",
      "proveedor": ""
  };
  }

  ngOnInit() {
    this.cargarCombos();
  }

  cargarCombos() {
    this._movimientosService.getTipoMovimientos().subscribe((resultado) => {
      if (resultado) {
        this.listTipoMovimiento = resultado;
      }
    });

    this._movimientosService.getSubTipoMovimientos().subscribe((resultado) => {
      if (resultado) {
        this.listSubTipoMovimiento = resultado;
      }
    });

    this._movimientosService.getTipoPagos().subscribe((resultado) => {
      if (resultado) {
        this.listTipoPago = resultado;
      }
    });

    this._movimientosService.getMonedas().subscribe((resultado) => {
      if (resultado) {
        this.listMoneda = resultado;
      }
    });
  }

  onSubmitMovimiento(form){

    this._movimientosService.addMovimiento(this.newMovimiento).subscribe(
      response => {
        this.movimiento_guardado = response;
        console.log(this.movimiento_guardado);
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );

  }


  /*onSubmit(form){onSubmitMovimiento

    this._movimientosService.addUser(this.new_user).subscribe(
      response => {
        this.usuario_guardado = response;
        console.log(this.usuario_guardado);
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );

  }*/

}