import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Routing } from './app.routing';
import { TrimPipe } from './trim.pipe';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { LinkCardContainerComponent } from './link-card-container/link-card-container.component';

@NgModule({
  declarations: [
    AppComponent, TrimPipe, WelcomePageComponent, ContactPageComponent, ExperienceListComponent, LinkCardContainerComponent
  ],
  imports: [
    BrowserModule, RouterModule, Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
