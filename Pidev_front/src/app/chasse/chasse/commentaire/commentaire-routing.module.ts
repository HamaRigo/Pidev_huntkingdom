import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommentaireComponent} from "./commentaire/commentaire.component";

const routes: Routes = [
  {path:'',component:CommentaireComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentaireRoutingModule { }
