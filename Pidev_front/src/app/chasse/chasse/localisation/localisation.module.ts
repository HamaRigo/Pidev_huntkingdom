import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalisationRoutingModule } from './localisation-routing.module';
import { LocalisationComponent } from './localisation/localisation.component';
import {ChienChasseRoutingModule} from "../chien-chasse/chien-chasse-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    LocalisationComponent
  ],
  imports: [
    CommonModule,
    LocalisationRoutingModule,
    ChienChasseRoutingModule,
    FormsModule,HttpClientModule
  ]
})
export class LocalisationModule { }
