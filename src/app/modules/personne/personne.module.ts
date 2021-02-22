import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonneRoutingModule } from './personne-routing.module';
import { PersonnesListComponent } from './personnes-list/personnes-list.component';
// Importer le module HttpClientModule dans app.module.ts pour utiliser HttpClient
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { PersonneDetailsComponent } from './personne-details/personne-details.component';


@NgModule({
  declarations: [PersonnesListComponent, UpdatePersonneComponent, PersonneDetailsComponent],
  imports: [
    CommonModule,
    PersonneRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PersonneModule { }
