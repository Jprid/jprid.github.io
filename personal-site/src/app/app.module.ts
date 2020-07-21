import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { RouterModule } from '@angular/router';
import { Routing } from './app.routing';
import { PageElementComponent } from './page-element/page-element.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,  PageComponent, PageElementComponent, AboutPageComponent
  ],
  imports: [
    BrowserModule, RouterModule, Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
