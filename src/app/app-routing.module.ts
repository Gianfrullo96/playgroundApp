import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GameOneComponent } from './game-one/game-one.component';
import { GameTwoComponent } from './game-two/game-two.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'game1', component: GameOneComponent },
  { path: 'game2', component: GameTwoComponent },
  // aggiungi altre rotte qui
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
