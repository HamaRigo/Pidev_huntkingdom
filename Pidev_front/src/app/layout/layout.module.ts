import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutadminComponent } from './layoutadmin/layoutadmin.component';
import { LayoutuserComponent } from './layoutuser/layoutuser.component';
import { LayoutAdminAuthComponent } from './layout-admin-auth/layout-admin-auth.component';
import { RouterModule } from '@angular/router';

import {AppComponent} from "../app.component";



@NgModule({
  declarations: [
    LayoutadminComponent,
    LayoutuserComponent,
    LayoutAdminAuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,


  ],
  providers: [

  ],
  bootstrap:[AppComponent]
})
export class LayoutModule { }
