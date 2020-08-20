import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatecompanyPage } from './createcompany.page';

const routes: Routes = [
  {
    path: '',
    component: CreatecompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatecompanyPageRoutingModule {}
