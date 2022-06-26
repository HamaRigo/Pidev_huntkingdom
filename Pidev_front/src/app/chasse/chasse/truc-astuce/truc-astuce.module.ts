import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrucAstuceRoutingModule } from './truc-astuce-routing.module';
import { TrucAstuceComponent } from './truc-astuce/truc-astuce.component';
import {ChienChasseRoutingModule} from "../chien-chasse/chien-chasse-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    TrucAstuceComponent
  ],
  imports: [
    CommonModule,
    TrucAstuceRoutingModule,
    ChienChasseRoutingModule,
    FormsModule,HttpClientModule
  ]
})
export class TrucAstuceModule { }
