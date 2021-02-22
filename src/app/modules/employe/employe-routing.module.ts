import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { EditEmployeComponent } from './edit-employe/edit-employe.component';
import { EmployesListComponent } from './employes-list/employes-list.component';

const routes: Routes = [
  { path: 'add-employe', component: AddEmployeComponent },
  { path: 'edit-employe/:id', component: EditEmployeComponent },
  { path: 'employes-list', component: EmployesListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'add-employe' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
