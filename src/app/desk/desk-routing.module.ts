import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeskPage } from './desk.page';

const routes: Routes = [
  {
    path: '',
    component: DeskPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeskPageRoutingModule {}
