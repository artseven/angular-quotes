import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteListComponentComponent } from './quote-list-component/quote-list-component.component';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { MyAboutComponentComponent } from './my-about-component/my-about-component.component';
import { ContactListComponentComponent } from './contact-list-component/contact-list-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { CountersComponentComponent } from './counters-component/counters-component.component';
import { ChuckNorrisPageComponentComponent } from './chuck-norris-page-component/chuck-norris-page-component.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponentComponent,
    MyHomeComponentComponent,
    MyAboutComponentComponent,
    ContactListComponentComponent,
    ContactComponentComponent,
    CountersComponentComponent,
    ChuckNorrisPageComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
