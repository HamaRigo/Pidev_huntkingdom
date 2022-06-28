import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GibierRoutingModule } from './gibier-routing.module';
import { GibierComponent } from './gibier/gibier.component';
import {ChienChasseRoutingModule} from "../chien-chasse/chien-chasse-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddLocalisationComponent } from './add-localisation/add-localisation.component';
import { AddGibierComponent } from './add-gibier/add-gibier.component';
import { UpdateGibierComponent } from './update-gibier/update-gibier.component';
import { DetailGibierComponent } from './detail-gibier/detail-gibier.component';


@NgModule({
  declarations: [
    GibierComponent,
    AddLocalisationComponent,
    AddGibierComponent,
    UpdateGibierComponent,
    DetailGibierComponent
  ],
  imports: [
    CommonModule,
    GibierRoutingModule,
    ChienChasseRoutingModule,
    FormsModule,HttpClientModule
  ]
})
export class GibierModule { }
