import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalisationRoutingModule } from './localisation-routing.module';
import { LocalisationComponent } from './localisation/localisation.component';
import {ChienChasseRoutingModule} from "../chien-chasse/chien-chasse-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddLocalisationComponent } from './add-localisation/add-localisation.component';
import { UpdateLocalisationComponent } from './update-localisation/update-localisation.component';
import { DetailLocalisationComponent } from './detail-localisation/detail-localisation.component';


@NgModule({
  declarations: [
    LocalisationComponent,
    AddLocalisationComponent,
    UpdateLocalisationComponent,
    DetailLocalisationComponent
  ],
  imports: [
    CommonModule,
    LocalisationRoutingModule,
    ChienChasseRoutingModule,
    FormsModule,HttpClientModule
  ]
})
export class LocalisationModule { }
