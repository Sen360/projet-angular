import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdresseComponent } from './composants/routing/adresse/adresse.component';
import { StagiaireComponent } from './composants/routing/stagiaire/stagiaire.component';
import { HomeComponent } from './composants/home/home.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateformComponent } from './composants/formulaires/templateform/templateform.component';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { CalculetteComponent } from './composants/formulaires/calculette/calculette.component';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { TpFormComponent } from './composants/formulaires/tp-form/tp-form.component';
import { FormComponent } from './composants/formulaires/form/form.component';
import { VehiculeModule } from './modules/vehicule/vehicule.module';
import { GetArrayObjectPipe } from './pipes/get-array-object.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { DragdropComponent } from './composants/materials/dragdrop/dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashboardComponent } from './composants/materials/dashboard/dashboard.component';


import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent } from './composants/materials/table/table.component';

import { NavigationComponent } from './composants/materials/navigation/navigation.component';

import { AddressFormComponent } from './composants/materials/address-form/address-form.component';

import { EmployeModule } from './modules/employe/employe.module';
import { GetCharPipe } from './pipes/get-char.pipe';
import { PersonneModule } from './modules/personne/personne.module';


@NgModule({
  declarations: [
    AppComponent,
    AdresseComponent,
    StagiaireComponent,
    HomeComponent,
    ErrorComponent,
    TemplateformComponent,
    CalculetteComponent,
    ReactiveFormComponent,
    TpFormComponent,
    FormComponent,
    GetArrayObjectPipe,
    DragdropComponent,
    DashboardComponent,
    TableComponent,
    NavigationComponent,
    AddressFormComponent,
    GetCharPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    VehiculeModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,

    LayoutModule,

    EmployeModule,

    PersonneModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() { console.log('app-module'); }
 }
