import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanylistPage } from './companylist.page';

const routes: Routes = [
  {
    path: '',
    component: CompanylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanylistPageRoutingModule {}
