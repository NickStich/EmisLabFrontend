import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationListComponent } from './components/operation-list/operation-list.component';
import { OperationFormComponent } from './components/operation-form/operation-form.component';


const routes: Routes = [
  {path: 'operations', component: OperationListComponent},
  {path: 'addoperation', component: OperationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
