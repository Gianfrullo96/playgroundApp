import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GameOneComponent } from './game-one/game-one.component';
import { GameTwoComponent } from './game-two/game-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GameOneComponent,
    GameTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
