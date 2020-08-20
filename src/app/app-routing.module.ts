import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'companylist',
    pathMatch: 'full'
  },
  {
    path: 'addcompany',
    loadChildren: () => import('./addcompany/addcompany.module').then(m => m.AddcompanyPageModule)
  },
  {
    path: 'addcompany',
    children: [
      {
        path: ':id',
        loadChildren: () => import('./addcompany/addcompany.module').then(m => m.AddcompanyPageModule)
      }
    ]
  },
  {
    path: 'createcompany',
    loadChildren: () => import('./createcompany/createcompany.module').then(m => m.CreatecompanyPageModule)
  },
  {
    path: 'companylist',
    loadChildren: () => import('./companylist/companylist.module').then(m => m.CompanylistPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
