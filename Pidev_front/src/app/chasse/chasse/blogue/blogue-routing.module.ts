import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogueComponent} from "./blogue/blogue.component";

const routes: Routes = [
  {path:'',component:BlogueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogueRoutingModule { }
