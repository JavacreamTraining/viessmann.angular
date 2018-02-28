import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { PeopleService } from './people.service';


@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PeopleService
  ],
  bootstrap: [AppComponent, SecondComponent]
})
export class AppModule { }
