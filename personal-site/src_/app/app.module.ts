import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { RouterModule } from '@angular/router';
import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,  PageComponent
  ],
  imports: [
    BrowserModule, RouterModule, Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
