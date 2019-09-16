import { Component, OnInit } from '@angular/core';
//import { Moneda } from '../Model/Moneda.model';
import { MovimientosService } from '../Service/movimientos.service';

@Component({
  selector: 'app-abm-moneda',
  templateUrl: './abm-moneda.component.html',
  styleUrls: ['./abm-moneda.component.css']
})
export class AbmMonedaComponent implements OnInit {
  title = 'java-front';
  public newMoneda: any;
  public moneda_guardada;

  constructor(
    private _movimientosService: MovimientosService
  ) { 
    this.newMoneda = {
      "id": "",
      "descripcion": "",
      "cotizacion": ""
  };
  }

  ngOnInit() {
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

}