import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Donna } from '../model/donna';
import { Uomo } from '../model/uomo';
import { AzioniSingole } from '../model/azioniSingole';
import { Router } from '@angular/router';
import { ARRAY_CAVALLE } from '../model/arrayCavalle';

@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css']
})
export class GameOneComponent implements OnInit {


  constructor(private router: Router) {

  }
  ngOnInit() {
    this.checkProbabilitiesSum();
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


  finalResult: {
    whoSborredOn: string;
    whoSborredOnTurn: number;
    whoSborredOnPosition: string;
  } = {
      whoSborredOn: '',
      whoSborredOnTurn: 0,
      whoSborredOnPosition: ''
    };

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
    // Mappa ogni oggetto donna nel formato Donna richiesto
    this.women2 = ARRAY_CAVALLE.map(
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
    const baseManLife = 550;
    this.manLife = (this.totalTurns / 10) * baseManLife * 1.2;
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

  checkProbabilitiesSum() {
    const totalProb = this.azioniGeneraliDiRiscaldamento
      .map(a => a.probabilita)
      .reduce((acc, val) => acc + val, 0);
    console.log('Somma probabilità:', totalProb);
    return totalProb;
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

  newTemporizedDebug() {
    if (this.gameOver || this.isTimedGameRunning) return;

    this.isTimedGameRunning = true;

    this.intervalId = setInterval(() => {
      this.nextTurnGame();

      if (this.gameOver) {
        this.stopTimedGame();
      }
    }, 100);
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
      if (!this.finalResult.whoSborredOn) {
        this.finalResult.whoSborredOn = sfida.donna.nome;
        this.finalResult.whoSborredOnTurn = this.currentTurn;
        this.finalResult.whoSborredOnPosition = sfida.azione.azioniSingole;
      }
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
    this.finalResult = {
      whoSborredOn: '',
      whoSborredOnTurn: 0,
      whoSborredOnPosition: ''
    };
  }


  onGoToHome() {
    this.router.navigate(["/"]);
  }

}

