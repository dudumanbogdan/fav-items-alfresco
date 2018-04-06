import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavEntryRoutingModule } from './fav-entry-routing.module';
import { FavEntryComponent } from './fav-entry/fav-entry.component';

@NgModule({
  imports: [
    CommonModule,
    FavEntryRoutingModule
  ],
  declarations: [FavEntryComponent]
})
export class FavEntryModule { }
