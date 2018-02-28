import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { PeopleService } from './people.service';
import { PersonDetailComponent } from './person-detail/person-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PeopleService
  ],
  bootstrap: [AppComponent, SecondComponent]
})
export class AppModule { }
