
import { Routes } from '@angular/router';
import { ListarClinicasComponent } from './components/listar-clinicas/listar-clinicas';
//import { CrearClinicaComponent } from './components/crear-clinica/crear-clinica';

export const routes: Routes = [
  { path: '', redirectTo: 'clinicas', pathMatch: 'full' },
  { path: 'clinicas', component: ListarClinicasComponent },
  //{ path: 'clinicas/nueva', component: CrearClinicaComponent }
];
