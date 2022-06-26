import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrucAstuceComponent} from "./truc-astuce/truc-astuce.component";

const routes: Routes = [
  {path:'',component:TrucAstuceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrucAstuceRoutingModule { }
