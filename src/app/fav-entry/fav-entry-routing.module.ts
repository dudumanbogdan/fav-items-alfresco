import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavEntryComponent } from './fav-entry/fav-entry.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FavEntryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavEntryRoutingModule { }
