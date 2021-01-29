import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DeskPage } from './desk.page';

import { DeskPageRoutingModule } from './desk-routing.module';

import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeskPageRoutingModule,
    FilterPipeModule
  ],
  declarations: [DeskPage]
})
export class DeskPageModule {}
