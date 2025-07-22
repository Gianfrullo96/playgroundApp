import { Component, ElementRef, ViewChild } from '@angular/core';
import { Donna } from '../model/donna';
import { Uomo } from '../model/uomo';
import { AzioniSingole } from '../model/azioniSingole';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css']
})
export class GameOneComponent {


  constructor(private router: Router) {

  }

  azione1 = 'limone';
  azione2 = 'sega';
  azione3 = 'leccare buco culo uomo'
  azione4 = 'bocchino';
  azione5 = 'ditalino';
  azione6 = 'leccata di figa';
  azione7 = 'bocchino fuckface';
  azione8 = 'bocchino con dito in culo';
  azione9 = 'ditalino bocchino';
  azione10 = '69 position';
  azione11 = 'missionary';
  azione12 = 'cavalcade';
  azione13 = 'pecorina';
  azione14 = 'appesa';
  azione15 = 'deepthroat';
  azione16 = 'drinksquirt';
  azione17 = 'soft anal';
  azione18 = 'cum in throat';
  azione19 = 'inverse penetration XL';
  azione20 = 'armFuck F';
  azione21 = 'ball kicks';


  //nome- salute- voto- pic
  women2: Donna[] = [new Donna('', 100, 10, '')];
  //nome-salute-pic
  men = new Uomo('', 1000, '');

  @ViewChild('scrollAnchor') scrollAnchor!: ElementRef;
  isTimedGameRunning: boolean = false;
  intervalId: any; // Definiscilo come proprietà della classe

  currentChallenge: {
    uomo: Uomo;
    donna: Donna;
    azione: AzioniSingole;
    tempo: string;
  }[] = [];

  azioniGeneraliDiRiscaldamento: AzioniSingole[] = [
    new AzioniSingole(this.azione1, 15, 0.07463, 'assets/actions/limone.png'),
    new AzioniSingole(this.azione2, 20, 0.06863, 'assets/actions/sega.jpg'),
    new AzioniSingole(this.azione3, 20, 0.06863, 'assets/actions/eatass.png'),
    new AzioniSingole(this.azione4, 40, 0.05882, 'assets/actions/bocchino.png'),
    new AzioniSingole(this.azione5, 30, 0.05882, 'assets/actions/ditalino.png'),
    new AzioniSingole(this.azione6, 40, 0.0588, 'assets/actions/ffm.png'),
    new AzioniSingole(this.azione7, 50, 0.05882, 'assets/actions/fff.png'),
    new AzioniSingole(this.azione8, 45, 0.05882, 'assets/actions/blowditoculo.png'),
    new AzioniSingole(this.azione9, 55, 0.05882, 'assets/actions/bocchinoditalino2.png'),
    new AzioniSingole(this.azione10, 60, 0.05882, 'assets/actions/69.png'),
    new AzioniSingole(this.azione11, 60, 0.04902, 'assets/actions/missionary.png'),
    new AzioniSingole(this.azione12, 60, 0.04902, 'assets/actions/cavalcade.png'),
    new AzioniSingole(this.azione13, 60, 0.04902, 'assets/actions/pecorina.png'),
    new AzioniSingole(this.azione14, 70, 0.04902, 'assets/actions/bondage.png'),
    new AzioniSingole(this.azione15, 80, 0.03922, 'assets/actions/hardbocchino.png'),
    new AzioniSingole(this.azione16, 20, 0.03922, 'assets/actions/drinksquirt2.png'),
    new AzioniSingole(this.azione17, 85, 0.03922, 'assets/actions/softAnal.png'),
    new AzioniSingole(this.azione18, 90, 0.02941, 'assets/actions/cumthroat.png'),
    new AzioniSingole(this.azione19, 90, 0.01961, 'assets/actions/wfm.png'),
    new AzioniSingole(this.azione20, 90, 0.00980, 'assets/actions/armfuck.png'),
    new AzioniSingole(this.azione21, 200, 0.00980, 'assets/actions/ballbuster.png')
  ];
  //parametri
  manLife = 550;
  totalTurns = 40;
  currentTurn = 0;
  gameOver = false;
  gameInCorso: boolean = false;
  gameResultMessage: string = '';
  urDead: boolean = false;



  scrollToBottom() {
    setTimeout(() => {
      this.scrollAnchor.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 100); // piccolo delay per assicurarsi che il DOM sia aggiornato
  }



  generaPartecipanti() {

    console.log("🧪 Avvio Game 2");
    this.generateMaleChampion();


    const defaultWomenData = [
      { name: 'Ilaria', image: 'assets/img/ilaria.jpg', voto: 9 },
      { name: 'Giomi', image: 'assets/img/giomi.jpg', voto: 8 },
      { name: 'Galletti', image: 'assets/img/galletti.jpg', voto: 8 },
      { name: 'Asia', image: 'assets/img/asia.jpg', voto: 9 },
      { name: 'Amato', image: 'assets/img/amato.jpg', voto: 7 },
      { name: 'Bubby', image: 'assets/img/bubby.jpg', voto: 7 },
      { name: 'Caccia', image: 'assets/img/caccia.jpg', voto: 7.5 },
      { name: 'Camma', image: 'assets/img/camma.jpg', voto: 9 },
      { name: 'Duo', image: 'assets/img/duo.jpg', voto: 9 },
      { name: 'Evangelion', image: 'assets/img/evangelion.jpg', voto: 9 },
      { name: 'Gdv', image: 'assets/img/gdv.jpg', voto: 8 },
      { name: 'Greca', image: 'assets/img/lagreca2.jpg', voto: 8 },
      { name: 'Gretarossi', image: 'assets/img/gretarossi.jpg', voto: 9 },
      { name: 'Guerrini', image: 'assets/img/guerrini.jpg', voto: 8 },
      { name: 'Klea', image: 'assets/img/klea.jpg', voto: 9.5 },
      { name: 'Mani', image: 'assets/img/mani.jpg', voto: 8.5 },
      { name: 'Marialaura', image: 'assets/img/marialaura.jpg', voto: 8 },
      { name: 'Minguzzi', image: 'assets/img/minguzzi.jpg', voto: 8 },
      { name: 'Minzi', image: 'assets/img/minzi.jpg', voto: 8.5 },
      { name: 'Miriam', image: 'assets/img/miriam.jpg', voto: 9 },
      { name: 'Molduc', image: 'assets/img/molduc.jpg', voto: 8.5 },
      { name: 'Mommy', image: 'assets/img/mommy.jpg', voto: 7 },
      { name: 'Podda', image: 'assets/img/podda.jpg', voto: 7 },
      { name: 'Sofi', image: 'assets/img/sofi.jpg', voto: 8 },
      { name: 'Spinella', image: 'assets/img/spinella.jpg', voto: 9 },
      { name: 'Trioschi', image: 'assets/img/trioschi.jpg', voto: 8 },
      { name: 'Vasi', image: 'assets/img/vasi.jpg', voto: 6 },
      { name: 'Verdi', image: 'assets/img/verdi.jpg', voto: 8.5 },
      { name: 'Bagnoli', image: 'assets/img/bagnoli.jpg', voto: 8 },
      { name: 'Cico', image: 'assets/img/cico.jpg', voto: 10 },
      { name: 'Dalpozzo', image: 'assets/img/dalpozzo.jpg', voto: 9 },
      { name: 'Danielina', image: 'assets/img/danielina.jpg', voto: 8 },
      { name: 'Devellis', image: 'assets/img/devellis.jpg', voto: 7.5 },
      { name: 'Echi', image: 'assets/img/echi.jpg', voto: 8 },
      { name: 'Gemma', image: 'assets/img/gemma.jpg', voto: 7.5 },
      { name: 'BambinePale', image: 'assets/img/bambinepale.jpg', voto: 8 },
      { name: 'Bucci', image: 'assets/img/bucci.jpg', voto: 8 },
      { name: 'Cavalli', image: 'assets/img/cavalli.jpg', voto: 8 },
      { name: 'Garroni', image: 'assets/img/garroni.jpg', voto: 6 },
      { name: 'Levriero', image: 'assets/img/levriero.jpg', voto: 6 },
      { name: 'SaraPale', image: 'assets/img/sarapale.jpg', voto: 6 },
      { name: 'Savva', image: 'assets/img/savva.jpg', voto: 8 },
      { name: 'Simo', image: 'assets/img/simo2.jpg', voto: 7 },
      { name: 'Zaffi', image: 'assets/img/zaffi.jpg', voto: 8.5 },
      { name: 'Zefi', image: 'assets/img/zefi.jpg', voto: 7.5 },
      { name: 'SofiRossi', image: 'assets/img/sofirossi.jpg', voto: 9 },
      { name: 'Argnani2', image: 'assets/img/argnani2.jpg', voto: 0 },
      { name: 'Danesi', image: 'assets/img/danesi.jpg', voto: 0 },
      { name: 'Gallamini', image: 'assets/img/gallamini.jpg', voto: 0 },
      { name: 'GiuliaPale', image: 'assets/img/giuliapale.jpg', voto: 0 },
      { name: 'Hillary', image: 'assets/img/hillary.jpg', voto: 0 },
      { name: 'Minzi2', image: 'assets/img/minzi2.jpg', voto: 0 },
      { name: 'Party', image: 'assets/img/party.jpg', voto: 0 },
      { name: 'Savorelli', image: 'assets/img/savorelli.jpg', voto: 0 },
      { name: 'Syria', image: 'assets/img/syria.jpg', voto: 0 },
      { name: 'Verdi2', image: 'assets/img/verdi2.jpg', voto: 0 },
      { name: 'Baravelli', image: 'assets/img/baravelli.jpg', voto: 0 },
      { name: 'Garavini', image: 'assets/img/garavini.jpg', voto: 0 },
      { name: 'Luciacosta', image: 'assets/img/luciacosta.jpg', voto: 0 },
      { name: 'Magnani', image: 'assets/img/magnani.jpg', voto: 0 },
      { name: 'Sofipale', image: 'assets/img/sofipale.jpg', voto: 0 },

    ];


    // Mappa ogni oggetto donna nel formato Donna richiesto
    this.women2 = defaultWomenData.map(
      donna => new Donna(donna.name, 100, donna.voto ?? 0, donna.image)
    );

    this.gameInCorso = true;
  }

  generaPartecipanti_gymEdition() {

    this.generateMaleChampion();
    const defaultWomenData = [
      { name: 'Asia', image: 'assets/img/asia.jpg' },
      { name: 'Amato', image: 'assets/img/amato.jpg' },
      { name: 'Camma', image: 'assets/img/camma.jpg' },
      { name: 'Duo', image: 'assets/img/duo.jpg' },
      { name: 'Evangelion', image: 'assets/img/evangelion.jpg' },
      { name: 'Gdp', image: 'assets/img/gdp.jpg' },
      { name: 'Gdv', image: 'assets/img/gdv.jpg' },
      { name: 'Greca', image: 'assets/img/lagreca2.jpg' },
      { name: 'Gretarossi', image: 'assets/img/gretarossi.jpg' },
      { name: 'Guerrini', image: 'assets/img/guerrini.jpg' },
      { name: 'Molduc', image: 'assets/img/molduc.jpg' },
      { name: 'Mommy', image: 'assets/img/mommy.jpg' },
      { name: 'Spinella', image: 'assets/img/spinella.jpg' },
      { name: 'Bagnoli', image: 'assets/img/bagnoli.jpg' },
      { name: 'Dalpozzo', image: 'assets/img/dalpozzo.jpg' },
    ];

    // Mappa ogni oggetto donna nel formato Donna richiesto
    this.women2 = defaultWomenData.map(
      donna => new Donna(donna.name, 100, 10, donna.image)
    );

    this.gameInCorso = true;
  }
  generateMaleChampion() {
    this.manLife = this.totalTurns / 10 * this.manLife * 1.2;
    this.men = new Uomo('Gianluca', this.manLife, 'assets/img/gianluca.jpg');
  }



  getSingleAction(): AzioniSingole {
    const rand = Math.random();
    let cumulative = 0;

    for (const azione of this.azioniGeneraliDiRiscaldamento) {
      cumulative += azione.probabilita;
      if (rand <= cumulative) {
        return azione;
      }
    }

    // Fallback: ritorna l'ultima
    return this.azioniGeneraliDiRiscaldamento[this.azioniGeneraliDiRiscaldamento.length - 1];
  }



  nextTurnGame() {
    if (this.currentTurn >= this.totalTurns) {
      this.gameOver = true;
      this.elaborateResult(); // da definire
      return;
    }

    const donnaRandom = this.women2[Math.floor(Math.random() * this.women2.length)];
    const azione = this.getSingleAction();



    this.currentChallenge.push({
      uomo: this.men,
      donna: donnaRandom,
      azione: azione,
      tempo: this.getRandomTempo()
    });


    // Applico effetto salute se necessario (es. solo se azione.power ≠ 0)
    this.battle();

    this.currentTurn++;
    this.scrollToBottom();
  }


  newTemporizedGame() {
    if (this.gameOver || this.isTimedGameRunning) return;

    this.isTimedGameRunning = true;

    this.intervalId = setInterval(() => {
      this.nextTurnGame();

      if (this.gameOver) {
        this.stopTimedGame();
      }
    }, 4000);
  }

  stopTimedGame() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isTimedGameRunning = false;
  }




  battle() {

    const sfida = this.currentChallenge[this.currentChallenge.length - 1];
    if (!sfida) return;

    const { uomo, azione, tempo } = sfida;
    const durataSecondi = this.tempoInSecondi(tempo);
    const danno = Math.floor(azione.power * durataSecondi) / 100;

    uomo.salute = (uomo.salute - danno);
    if (uomo.salute <= 0) {
      this.urDead = true;
    }
  }


  elaborateResult(): string {
    const uomo = this.men;
    const turniGiocati = this.currentTurn;
    const salute = uomo.salute;

    let risultato = '';

    if (salute > 0) {
      risultato = `🎉 Hai superato tutte le ${turniGiocati} sfide!\n`;
      risultato += `Salute finale: ${salute.toFixed(2)}\n`;
      risultato += 'Complimenti, sei sopravvissuto! 💪';
    } else {
      risultato = `💀 Sei stato sconfitto dopo ${turniGiocati} sfide.\n`;
      risultato += `Hai sborrato tutto.\n`;
      risultato += 'ora vai a nanna!';
    }

    // Qui puoi aggiornare una variabile per mostrare a video, tipo:
    this.gameResultMessage = risultato;

    return risultato;
  }

  //azioni comode
  getRandomTempo(): string {
    const minuti = Math.floor(Math.random() * 3) + 1; // da 1 a 5
    const secondi = Math.floor(Math.random() * 60);   // da 0 a 59

    const minutiStr = minuti.toString();
    const secondiStr = secondi.toString().padStart(2, '0');

    return `${minutiStr}:${secondiStr}`; // es. "4:09"
  }
  private tempoInSecondi(tempo: string): number {
    const [minutiStr, secondiStr] = tempo.split(':');
    const minuti = parseInt(minutiStr, 10);
    const secondi = parseInt(secondiStr, 10);
    return minuti * 60 + secondi;
  }
  resetAll() {
    this.stopTimedGame(); // Ferma anche il temporizzato

    this.gameInCorso = false;
    this.gameOver = false;
    this.currentChallenge = [];
    this.currentTurn = 0;
    this.gameResultMessage = '';
    this.urDead = false;
  }


  onGoToHome() {
    this.router.navigate(["/"]);
  }

}

