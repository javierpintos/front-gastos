import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AbmMovimientoComponent } from './abm-movimiento/abm-movimiento.component';
import { AbmMonedaComponent } from './abm-moneda/abm-moneda.component';
import { AbmTipoPagoComponent } from './abm-tipo-pago/abm-tipo-pago.component';
import { AbmTipoMovimientoComponent } from './abm-tipo-movimiento/abm-tipo-movimiento.component';
import { AbmSubTipoMovimientoComponent } from './abm-sub-tipo-movimiento/abm-sub-tipo-movimiento.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'movimiento', component: AbmMovimientoComponent},
	{path: 'moneda', component: AbmMonedaComponent},
	{path: 'tipoPago', component: AbmTipoPagoComponent},
	{path: 'tipoMovimiento', component: AbmTipoMovimientoComponent},
	{path: 'subTipoMovimiento', component: AbmSubTipoMovimientoComponent},
	{path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);