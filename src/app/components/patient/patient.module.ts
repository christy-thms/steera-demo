import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { HeaderComponent } from '../header/header.component'; 
import { SidebarComponent } from '../sidebar/sidebar.component'; 


@NgModule({
  declarations: [
    PatientComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
