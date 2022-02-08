import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) }, 
  { path: 'patient', loadChildren: () => import('./components/patient/patient.module').then(m => m.PatientModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
