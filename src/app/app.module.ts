import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app-routing';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { MovimientosService } from './Service/movimientos.service';
import { AbmMonedaComponent } from './abm-moneda/abm-moneda.component';
import { AbmTipoPagoComponent } from './abm-tipo-pago/abm-tipo-pago.component';
import { AbmTipoMovimientoComponent } from './abm-tipo-movimiento/abm-tipo-movimiento.component';
import { AbmSubTipoMovimientoComponent } from './abm-sub-tipo-movimiento/abm-sub-tipo-movimiento.component';
import { AbmMovimientoComponent } from './abm-movimiento/abm-movimiento.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AbmMonedaComponent,
    AbmTipoPagoComponent,
    AbmTipoMovimientoComponent,
    AbmSubTipoMovimientoComponent,
    AbmMovimientoComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    MovimientosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
