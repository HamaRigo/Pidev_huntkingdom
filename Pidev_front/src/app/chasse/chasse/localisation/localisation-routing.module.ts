import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LocalisationComponent} from "./localisation/localisation.component";

const routes: Routes = [
  {path:'',component:LocalisationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalisationRoutingModule { }
