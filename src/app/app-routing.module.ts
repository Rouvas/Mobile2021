import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'countries',
    children: [
      {
        path: '',
        loadChildren: () => import('./desk/desk.module').then( m => m.DeskPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./more/more.module').then( m => m.MorePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'countries',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
