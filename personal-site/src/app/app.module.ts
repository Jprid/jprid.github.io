import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Routing } from './app.routing';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent, AboutPageComponent
  ],
  imports: [
    BrowserModule, RouterModule, Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
