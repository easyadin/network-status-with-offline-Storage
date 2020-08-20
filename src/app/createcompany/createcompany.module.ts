import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatecompanyPageRoutingModule } from './createcompany-routing.module';

import { CreatecompanyPage } from './createcompany.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatecompanyPageRoutingModule
  ],
  declarations: [CreatecompanyPage]
})
export class CreatecompanyPageModule {}
