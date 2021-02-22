import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './composants/materials/address-form/address-form.component';
import { AdresseComponent } from './composants/routing/adresse/adresse.component';
import { CalculetteComponent } from './composants/formulaires/calculette/calculette.component';
import { DashboardComponent } from './composants/materials/dashboard/dashboard.component';
import { DragdropComponent } from './composants/materials/dragdrop/dragdrop.component';
import { ErrorComponent } from './composants/error/error.component';
import { FormComponent } from './composants/formulaires/form/form.component';
import { HomeComponent } from './composants/home/home.component';
import { NavigationComponent } from './composants/materials/navigation/navigation.component';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { StagiaireComponent } from './composants/routing/stagiaire/stagiaire.component';
import { TableComponent } from './composants/materials/table/table.component';
import { TemplateformComponent } from './composants/formulaires/templateform/templateform.component';
import { TpFormComponent } from './composants/formulaires/tp-form/tp-form.component';

// Déclaration d'un tableau de routes appelées dans le module principal

// redirectTo: "/home": nous utilisons cette propriété dans le tableau routes 
// pour indiquer au service de routage si les utilisateurs naviguent vers l'URL vide, 
// ils doivent être redirigés vers l'URL d'accueil plutôt que vers l'URL vide.

// pathMatch: 'full': Cette propriété commande à Angular qu'une URL vide doit 
// correspondre au chemin de chaîne exact et non une chaîne partiellement vide.

const routes: Routes = [

  { path: 'home', component: HomeComponent },

  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
  { path: 'adresse', component: AdresseComponent },
  { path: 'template-form', component: TemplateformComponent },
  { path: 'calculette', component: CalculetteComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'form', component: FormComponent },
  { path: 'tp-form', component: TpFormComponent },

  { path: 'drag', component: DragdropComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'adresse-form', component: AddressFormComponent },
  { path: 'table', component: TableComponent },

  // lazy loading (chargement paresseux : charger les modules a la demande)
  { path: 'vehicule', loadChildren: './modules/vehicule/vehicule.module#VehiculeModule'},

  { path: 'personne', loadChildren: './modules/personne/personne.module#PersonneModule'},

  { path: 'employe', loadChildren: './modules/employe/employe.module#EmployeModule'},

  { path: 'error', component: ErrorComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Ce fichier permet d'assurer le mapping chemin/composant
export class AppRoutingModule { }
