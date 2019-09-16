import { Component, OnInit } from '@angular/core';
//import { Moneda } from '../Model/Moneda.model';
import { MovimientosService } from '../Service/movimientos.service';

@Component({
  selector: 'app-abm-tipo-pago',
  templateUrl: './abm-tipo-pago.component.html',
  styleUrls: ['./abm-tipo-pago.component.css']
})
export class AbmTipoPagoComponent implements OnInit {
  title = 'java-front';
  public newTipoPago: any;
  public tipoPago_guardado;

  constructor(
    private _movimientosService: MovimientosService
  ) { 
    this.newTipoPago = {
      "id": "",
      "descripcion": ""
  };
  }

  ngOnInit() {
  }

  onSubmit(form){

    this._movimientosService.addTipoPago(this.newTipoPago).subscribe(
      response => {
        this.tipoPago_guardado = response;
        console.log(this.tipoPago_guardado);
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}