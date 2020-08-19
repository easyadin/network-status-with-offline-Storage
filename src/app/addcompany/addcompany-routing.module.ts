import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcompanyPage } from './addcompany.page';

const routes: Routes = [
  {
    path: '',
    component: AddcompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcompanyPageRoutingModule {}
