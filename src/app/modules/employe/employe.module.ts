import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EmployeRoutingModule } from './employe-routing.module';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { EditEmployeComponent } from './edit-employe/edit-employe.component';
import { EmployesListComponent } from './employes-list/employes-list.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AngularMaterialModule } from '../../angular-material.module';

@NgModule({
  declarations: [AddEmployeComponent, EditEmployeComponent, EmployesListComponent],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule
  ]
})
export class EmployeModule { }
