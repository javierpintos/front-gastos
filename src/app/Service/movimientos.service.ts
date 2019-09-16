import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultadoModel } from '../Model/ResultadoModel';
import { Moneda } from '../Model/Moneda.model';
import { TipoMovimiento } from '../Model/TipoMovimiento.model';
import { SubTipoMovimiento } from '../Model/SubTipoMovimiento.model';
import { TipoPago } from '../Model/TipoPago.model';
import { Observable } from 'rxjs';

@Injectable( )

export class MovimientosService {
    public url: string;
    constructor(private _http: HttpClient) {
        this.url = "http://localhost:8080/api/";
    }

    getTipoMovimientos() {
        return this._http.get<TipoMovimiento>(this.url + 'tipoMovimientos');
    }

    getSubTipoMovimientos() {
        return this._http.get<SubTipoMovimiento>(this.url + 'subTipoMovimientos');
    }

    getTipoPagos() {
        return this._http.get<TipoPago>(this.url + 'tipoPagos');
    }

    getMonedas() {
        return this._http.get<Moneda>(this.url + 'monedas');
    }

    addMoneda(newMoneda): Observable<any>{
		let params = JSON.stringify(newMoneda);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url + 'monedas', params, {headers: headers});
    }
    
    /*addUser(user): Observable<any>{
		let params = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post('https://reqres.in/api/users', params, {headers: headers});
	}*/

}

