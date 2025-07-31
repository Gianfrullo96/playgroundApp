import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GameOneComponent } from './game-one/game-one.component';
import { GameTwoComponent } from './game-two/game-two.component';
import { GameThreeComponent } from './game-three/game-three.component';
import { GameFourComponent } from './game-four/game-four.component';
import { GameFiveComponent } from './game-five/game-five.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'game1', component: GameOneComponent },
  { path: 'game2', component: GameTwoComponent },
  { path: 'game3', component: GameThreeComponent },
  { path: 'game4', component: GameFourComponent },
  { path: 'game5', component: GameFiveComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
