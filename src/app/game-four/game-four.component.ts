



import { Component, OnInit, OnDestroy } from '@angular/core';
import { WomanGame2 } from '../model/secondoGioco/womanGame2';
import { ARRAY_CAVALLE } from '../model/arrayCavalle';

@Component({
  selector: 'app-game-four',
  templateUrl: './game-four.component.html',
  styleUrls: ['./game-four.component.css']
})
export class GameFourComponent implements OnInit, OnDestroy {
  women: WomanGame2[] = [];
  shuffledWomen: WomanGame2[] = [];
  currentIndex: number = 0;
  intervalId: any;
  mode: 'auto' | 'manual' | null = null;

  ngOnInit(): void {
    this.generateCavalle();
  }

  ngOnDestroy(): void {
    this.stopAuto();
  }

  generateCavalle() {
     
  
      // Mappa ogni oggetto donna nel formato Donna richiesto
      this.women = ARRAY_CAVALLE.map(
        donna => new WomanGame2(donna.name, donna.image, donna.voto, '')
      );
  
    }

  shuffleArray(array: WomanGame2[]): WomanGame2[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  startAuto() {
    this.mode = 'auto';
    this.shuffledWomen = this.shuffleArray(this.women);
    this.currentIndex = 0;
    this.stopAuto();
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.shuffledWomen.length;
    }, 4000);
  }

  startManual() {
    this.mode = 'manual';
    this.stopAuto();
    this.shuffledWomen = this.shuffleArray(this.women);
    this.currentIndex = 0;
  }

  next() {
    if (this.shuffledWomen.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.shuffledWomen.length;
  }

  previous() {
    if (this.shuffledWomen.length === 0) return;
    this.currentIndex =
      (this.currentIndex - 1 + this.shuffledWomen.length) % this.shuffledWomen.length;
  }

  stopAuto() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

