import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Routing } from './app.routing';
import { TrimPipe } from './trim.pipe';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';

@NgModule({
  declarations: [
    AppComponent, TrimPipe, WelcomePageComponent, ContactPageComponent, ExperienceListComponent
  ],
  imports: [
    BrowserModule, RouterModule, Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
