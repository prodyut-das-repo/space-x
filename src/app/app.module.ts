import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LaunchCardsComponent } from './launch-list/launch-cards/launch-cards.component';
import { LaunchService } from './services/launch-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LaunchListComponent,
    LaunchCardsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LaunchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
