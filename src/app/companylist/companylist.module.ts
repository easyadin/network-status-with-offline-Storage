import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanylistPageRoutingModule } from './companylist-routing.module';

import { CompanylistPage } from './companylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanylistPageRoutingModule
  ],
  declarations: [CompanylistPage]
})
export class CompanylistPageModule {}
