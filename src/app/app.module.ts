import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule
} from '@angular/material';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, PathNotFoundComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
