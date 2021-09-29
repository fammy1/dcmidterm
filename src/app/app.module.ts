import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantsService } from './participants.service';
import { ParticipantsComponent } from './participants/participants.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ParticipantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
