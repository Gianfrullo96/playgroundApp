



import { Component, OnInit, OnDestroy } from '@angular/core';
import { WomanGame2 } from '../model/secondoGioco/womanGame2';

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
      const defaultWomenData = [
        { name: 'Ilaria', image: 'assets/img/ilaria.jpg', voto: 85 },
        { name: 'Giomi', image: 'assets/img/giomi.jpg', voto: 80 },
        { name: 'Galletti', image: 'assets/img/galletti.jpg', voto: 80 },
        { name: 'Asia', image: 'assets/img/asia.jpg', voto: 95 },
        { name: 'Amato', image: 'assets/img/amato.jpg', voto: 65 },
        { name: 'Bubby', image: 'assets/img/bubby.jpg', voto: 68 },
        { name: 'Caccia', image: 'assets/img/caccia.jpg', voto: 75 },
        { name: 'Camma', image: 'assets/img/camma.jpg', voto: 90 },
        { name: 'Evangelion', image: 'assets/img/evangelion.jpg', voto: 88 },
        { name: 'Gdv', image: 'assets/img/gdv.jpg', voto: 75 },
        { name: 'Greca', image: 'assets/img/lagreca2.jpg', voto: 80 },
        { name: 'Gretarossi', image: 'assets/img/gretarossi.jpg', voto: 95 },
        { name: 'Guerrini', image: 'assets/img/guerrini.jpg', voto: 80 },
        { name: 'Klea', image: 'assets/img/klea.jpg', voto: 98 },
        { name: 'Mani', image: 'assets/img/mani.jpg', voto: 85 },
        { name: 'Marialaura', image: 'assets/img/marialaura.jpg', voto: 78 },
        { name: 'Minguzzi', image: 'assets/img/minguzzi.jpg', voto: 80 },
        { name: 'Minzi', image: 'assets/img/minzi.jpg', voto: 85 },
        { name: 'Molduc', image: 'assets/img/molduc.jpg', voto: 85 },
        { name: 'Mommy', image: 'assets/img/mommy.jpg', voto: 70 },
        { name: 'Podda', image: 'assets/img/podda.jpg', voto: 67 },
        { name: 'Sofi', image: 'assets/img/sofi.jpg', voto: 80 },
        { name: 'Spinella', image: 'assets/img/spinella.jpg', voto: 93 },
        { name: 'Trioschi', image: 'assets/img/trioschi.jpg', voto: 80 },
        { name: 'Vasi', image: 'assets/img/vasi.jpg', voto: 60 },
        { name: 'Bagnoli', image: 'assets/img/bagnoli.jpg', voto: 80 },
        { name: 'Cico', image: 'assets/img/cico.jpg', voto: 73 },
        { name: 'Dalpozzo', image: 'assets/img/dalpozzo.jpg', voto: 90 },
        { name: 'Danielina', image: 'assets/img/danielina.jpg', voto: 83 },
        { name: 'Devellis', image: 'assets/img/devellis.jpg', voto: 75 },
        { name: 'Echi', image: 'assets/img/echi.jpg', voto: 80 },
        { name: 'Gemma', image: 'assets/img/gemma.jpg', voto: 75 },
        { name: 'Bucci', image: 'assets/img/bucci.jpg', voto: 80 },
        { name: 'Cavalli', image: 'assets/img/cavalli.jpg', voto: 80 },
        { name: 'Garroni', image: 'assets/img/garroni.jpg', voto: 65 },
        { name: 'Levriero', image: 'assets/img/levriero.jpg', voto: 60 },
        { name: 'SaraPale', image: 'assets/img/sarapale.jpg', voto: 60 },
        { name: 'Savva', image: 'assets/img/savva.jpg', voto: 80 },
        { name: 'Simo', image: 'assets/img/simo2.jpg', voto: 65 },
        { name: 'Zaffi', image: 'assets/img/zaffi.jpg', voto: 85 },
        { name: 'Zefi', image: 'assets/img/zefi.jpg', voto: 75 },
        { name: 'SofiRossi', image: 'assets/img/sofirossi.jpg', voto: 90 },
        { name: 'Danesi', image: 'assets/img/danesi.jpg', voto: 75 },
        { name: 'Gallamini', image: 'assets/img/gallamini.jpg', voto: 78 },
        { name: 'GiuliaPale', image: 'assets/img/giuliapale.jpg', voto: 75 },
        { name: 'Hillary', image: 'assets/img/hillary.jpg', voto: 85 },
        { name: 'Savorelli', image: 'assets/img/savorelli.jpg', voto: 65 },
        { name: 'Syria', image: 'assets/img/syria.jpg', voto: 85 },
        { name: 'Verdi', image: 'assets/img/verdi2.jpg', voto: 85 },
        { name: 'Baravelli', image: 'assets/img/baravelli.jpg', voto: 82 },
        { name: 'Garavini', image: 'assets/img/garavini.jpg', voto: 83 },
        { name: 'Luciacosta', image: 'assets/img/luciacosta.jpg', voto: 70 },
        { name: 'Magnani', image: 'assets/img/magnani.jpg', voto: 75 },
        { name: 'Sofipale', image: 'assets/img/sofipale.jpg', voto: 85 },
        { name: 'Brusi', image: 'assets/img/brusi.jpg', voto: 0 },
        { name: 'Fantini', image: 'assets/img/fantini.jpg', voto: 0 },
        { name: 'Gine', image: 'assets/img/gine.jpg', voto: 0 },
        { name: 'Marrico', image: 'assets/img/marrico.jpg', voto: 0 },
        { name: 'Masotti', image: 'assets/img/masotti.jpg', voto: 0 },
        { name: 'Rebbireb', image: 'assets/img/rebbireb.jpg', voto: 0 },
        { name: 'RusalenGrande', image: 'assets/img/rusalenGrande.jpg', voto: 0 },
        { name: 'RusalenPiccola', image: 'assets/img/rusalenPiccola.jpg', voto: 0 },
        { name: 'Burattoni', image: 'assets/img/burattoni.jpg', voto: 0 },
        { name: 'Caterinone', image: 'assets/img/caterinone.jpg', voto: 0 },
        { name: 'Dayanacambi', image: 'assets/img/dayanacambi.jpg', voto: 0 },
        { name: 'Evangelista', image: 'assets/img/evangelista.jpg', voto: 0 },
        { name: 'Giuliatamarra', image: 'assets/img/giuliatamarra.jpg', voto: 0 },
        { name: 'orsi', image: 'assets/img/orsi.jpg', voto: 0 },
        { name: 'Moretto', image: 'assets/img/moretto.jpg', voto: 0 },
        { name: 'Pagnini', image: 'assets/img/pagnini.jpg', voto: 0 },
        { name: 'Secrieru', image: 'assets/img/secrieru.jpg', voto: 0 },
        { name: 'Vaglio', image: 'assets/img/vaglio.jpg', voto: 0 },
        { name: 'Zanolli', image: 'assets/img/zanolli.jpg', voto: 0 },
  
      ];
  
  
      // Mappa ogni oggetto donna nel formato Donna richiesto
      this.women = defaultWomenData.map(
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

