import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcompanyPageRoutingModule } from './addcompany-routing.module';

import { AddcompanyPage } from './addcompany.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcompanyPageRoutingModule
  ],
  declarations: [AddcompanyPage]
})
export class AddcompanyPageModule {}
