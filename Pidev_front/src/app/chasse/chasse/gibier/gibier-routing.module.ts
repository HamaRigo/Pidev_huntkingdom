import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GibierComponent} from "./gibier/gibier.component";

const routes: Routes = [
  {path:'',component:GibierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GibierRoutingModule { }
