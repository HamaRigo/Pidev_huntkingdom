import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'chasse',loadChildren:()=>import('./chasse/chasse.module').then(m=>m.ChasseModule)},
  {path:'peche',loadChildren:()=>import('./peche/peche.module').then(m=>m.PecheModule)},
  {path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:'store',loadChildren:()=>import('./store/store.module').then(m=>m.StoreModule)},
  {path:'evennement',loadChildren:()=>import('./evennement/evennement.module').then(m=>m.EvennementModule)},
  {path:'panier',loadChildren:()=>import('./panier/panier.module').then(m=>m.PanierModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
