import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavEntryRoutingModule } from './fav-entry-routing.module';
import { FavEntryComponent } from './fav-entry/fav-entry.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FavEntryRoutingModule
  ],
  declarations: [FavEntryComponent]
})
export class FavEntryModule { }
