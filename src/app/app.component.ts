import { Component, OnInit, QueryList } from '@angular/core';
import { Moneda } from './Model/Moneda.model';
import { TipoMovimiento } from './Model/TipoMovimiento.model';
import { SubTipoMovimiento } from './Model/SubTipoMovimiento.model';
import { TipoPago } from './Model/TipoPago.model';
import { MovimientosService } from './Service/movimientos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovimientosService]
})
export class AppComponent implements OnInit {
  title = 'java-front';
  public new_user: any;
  public usuario_guardado;

  public newMoneda: any;
  public moneda_guardada;

  public listTipoMovimiento: TipoMovimiento;
  public listSubTipoMovimiento: SubTipoMovimiento;
  public listTipoPago: TipoPago;
  public listMoneda: Moneda;

  /*constructor(
    private _movimientosService: MovimientosService
  ) { 
    this.new_user = {
      "name": "",
      "job": ""
  };
  }*/

  constructor(
    private _movimientosService: MovimientosService
  ) { 
    this.newMoneda = {
      //"id": "",
      "descripcion": "",
      "cotizacion": ""
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
        //console.log(resultado)
      }
    });

    this._movimientosService.getTipoPagos().subscribe((resultado) => {
      if (resultado) {
        this.listTipoPago = resultado;
        //console.log(resultado)
      }
    });

    this._movimientosService.getMonedas().subscribe((resultado) => {
      if (resultado) {
        this.listMoneda = resultado;
        //console.log(resultado)
      }
    });
  }

  onSubmit(form){

    this._movimientosService.addMoneda(this.newMoneda).subscribe(
      response => {
        this.moneda_guardada = response;
        console.log(this.moneda_guardada);
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );

  }

  /*onSubmit(form){

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
