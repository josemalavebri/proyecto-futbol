import { Routes } from '@angular/router';
import { PosicionesComponent } from './componentes/posiciones/posiciones.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'posiciones', component: PosicionesComponent },
    {path:'',component:PosicionesComponent},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
