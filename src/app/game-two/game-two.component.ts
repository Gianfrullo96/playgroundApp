import { Component, OnInit } from '@angular/core';
import { AmbienteGioco } from '../model/secondoGioco/ambiente-gioco.model';
import { AmbienteTipo } from '../model/secondoGioco/ambiente-tipo.enum';
import { WomanGame2 } from '../model/secondoGioco/womanGame2';
import { Router } from '@angular/router';
import { faker } from '@faker-js/faker';
import { ARRAY_CAVALLE } from '../model/arrayCavalle';

@Component({
  selector: 'app-game-two',
  templateUrl: './game-two.component.html',
  styleUrls: ['./game-two.component.css']
})
export class GameTwoComponent implements OnInit {

  constructor(private router: Router) {

  }
  ambienti: AmbienteGioco[] = [];
  ambienti_nonna: AmbienteGioco[] = [];


  roomOrderOk: boolean = false;
  roomOrder: string[] = [];

  //nome- salute- voto- pic
  women: WomanGame2[] = [new WomanGame2('', '', 10, '')];

  focusAmbiente(stanzaNome: string) {
    const id = this.sanitizeId(stanzaNome);

    // Rimuovi la classe highlight da tutti i div ambiente
    this.ambienti.forEach(a => {
      const elem = document.getElementById(this.sanitizeId(a.nome));
      if (elem) elem.classList.remove('highlight');
    });

    // Aggiungi la classe highlight solo al div selezionato
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      elem.classList.add('highlight');
    }
  }


  sanitizeId(name: string): string {
    return 'ambiente-' + name.replace(/\s+/g, '-');
  }


  ngOnInit(): void {


    this.generateScenario();
    this.generateCavalle();



  }

  generateScenario() {
    this.ambienti_nonna = [
      new AmbienteGioco(AmbienteTipo.Sala, 'Sala', 4),
      new AmbienteGioco(AmbienteTipo.Letto, 'Camera da letto', 3),
      new AmbienteGioco(AmbienteTipo.Camera, 'Camera mia ', 1),
      new AmbienteGioco(AmbienteTipo.Cucina, 'Cucina', 2),
      new AmbienteGioco(AmbienteTipo.Garage, 'Garage', 1),
      new AmbienteGioco(AmbienteTipo.Bagno, 'Bagno Piccolo', 1),
      new AmbienteGioco(AmbienteTipo.Bagno, 'Bagno grande', 2),
      new AmbienteGioco(AmbienteTipo.Balcone, 'Balcone', 1),
      new AmbienteGioco(AmbienteTipo.Studio, 'Studio', 1),
      new AmbienteGioco(AmbienteTipo.Studio, 'Stanzino a lavoro', 1),
      new AmbienteGioco(AmbienteTipo.Ascensore, 'Ascensore', 1),
      new AmbienteGioco(AmbienteTipo.Macchina, 'Macchina', 2),
      new AmbienteGioco(AmbienteTipo.Generic, 'Scale Palazzo', 1),
      new AmbienteGioco(AmbienteTipo.Generic, 'Corridoio', 1),
    ];
    //nonna versione
    this.ambienti = [
      new AmbienteGioco(AmbienteTipo.Sala, 'Sala grande nonna P', 2),
      new AmbienteGioco(AmbienteTipo.Sala, 'Sala Gianni', 2),
      new AmbienteGioco(AmbienteTipo.Sala, 'Sala Gio dietro', 3),
      new AmbienteGioco(AmbienteTipo.Sala, 'Sala Bibo Grande(UP)', 5),
      new AmbienteGioco(AmbienteTipo.Sala, 'Sala Bibo Piccola(DOWN)', 2),
      new AmbienteGioco(AmbienteTipo.Letto, 'Letto Nonna P', 2),
      new AmbienteGioco(AmbienteTipo.Letto, 'Letto Camera Gianni', 1),
      new AmbienteGioco(AmbienteTipo.Letto, 'Camera matrimoniale Gianni', 2),
      new AmbienteGioco(AmbienteTipo.Cucina, 'Cucina Nonna Pier', 2),
      new AmbienteGioco(AmbienteTipo.Cucina, 'Cucinetto dietro', 1),
      new AmbienteGioco(AmbienteTipo.Cucina, 'Cucina Tania', 1),
      new AmbienteGioco(AmbienteTipo.Garage, 'Cantina', 1),
      new AmbienteGioco(AmbienteTipo.Garage, 'Garage', 1),
      new AmbienteGioco(AmbienteTipo.Garage, 'Garage Gianni', 1),
      new AmbienteGioco(AmbienteTipo.Garage, 'ScannoMaiali', 1),
      new AmbienteGioco(AmbienteTipo.Bagno, 'Bagno Piccolo Nonna', 1),
      new AmbienteGioco(AmbienteTipo.Bagno, 'Bagno Grande Nonna(UP)', 2),
      new AmbienteGioco(AmbienteTipo.Bagno, 'Bagno Tania', 1),
      new AmbienteGioco(AmbienteTipo.Studio, 'Tettoia Nonno', 1),
      new AmbienteGioco(AmbienteTipo.Generic, 'Sottotettoia Nonno', 1),
      new AmbienteGioco(AmbienteTipo.Generic, 'New Tettoia', 1),
    ];

    console.log('Ambienti inizializzati:', this.ambienti);
  }

  generateCavalle() {


    // Mappa ogni oggetto donna nel formato Donna richiesto
    this.women = ARRAY_CAVALLE.map(
      donna => new WomanGame2(donna.name, donna.image, donna.voto, '')
    );

  }

  putCavalleIntoRoom() {
    // Reset occupanti in ogni ambiente
    this.ambienti.forEach(a => a.occupanti = []);

    // Copia e mescola l'array delle donne (Fisher-Yates shuffle)
    const shuffledWomen = [...this.women];
    for (let i = shuffledWomen.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledWomen[i], shuffledWomen[j]] = [shuffledWomen[j], shuffledWomen[i]];
    }

    let currentIndex = 0;

    // Assegna donne alle stanze
    this.ambienti.forEach(ambiente => {
      for (let i = 0; i < ambiente.maxOccupanti && currentIndex < shuffledWomen.length; i++) {
        // Inserisce il nome della donna negli occupanti
        if (!ambiente.occupanti) ambiente.occupanti = [];
        ambiente.occupanti.push(shuffledWomen[currentIndex]);
        currentIndex++;
      }
    });

    // Log dei risultati
    this.ambienti.forEach(ambiente => {
      console.log(`Ambiente: ${ambiente.nome} (${ambiente.tipo}) - Occupanti: ${ambiente.occupanti.join(', ')}`);
    });
  }
  removeCavalleFromTheRoom() {
    this.ambienti.forEach(a => a.occupanti = []);
    this.roomOrder = [];
    this.roomOrderOk = false;
  }

  showCavalleContainer: boolean = false;
  onShowCavalleContainer() {
    this.showCavalleContainer = !this.showCavalleContainer;
  }

  onGoToHome() {
    this.router.navigate(["/"]);
  }
  onChooseRoomOrder() {
    if (this.ambienti && Array.isArray(this.ambienti)) {
      const shuffled = [...this.ambienti];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      this.roomOrder = shuffled.map((el, index) => `${index + 1}. ${el.nome}`);
      this.roomOrderOk = true;
    } else {
      this.roomOrder = [];
      this.roomOrderOk = false;
    }
  }


  onPutCavalleIntoRoom() {
    this.putCavalleIntoRoom();
  }


  onRemoveCavalleFromRoom() {
    this.removeCavalleFromTheRoom()
  }


  zoomedImageUrl: string | null = null;

  onZoomImage(url: string) {
    this.zoomedImageUrl = url;
  }

  closeZoom() {
    this.zoomedImageUrl = null;
  }

  azioni: string[] = [
    'bacio francese',
    'dita in gola',
    'sfregare uccello in faccia',
    'leccare ascelle',
    'leccare orello donna',
    'limone',
    'sega',
    'spit in mouth M a F',
    'spit in mouth F to M',
    'leccare buco culo uomo',
    'bocchino senza mani',
    'bocchino con mani',
    'ditalino easy',
    'ditalino hard',
    'leccata di figa',
    'bocchino fuckface',
    'bocchino con dito in culo',
    'ditalino bocchino',
    '69 position',
    'missionary',
    'cavalcade',
    'pecorina',
    'appesa',
    'deepthroat',
    'drinksquirt',
    'soft anal',
    'inverse penetration XL',
    'inverse penetration L',
    'inverse penetration S',
    'armFuck F',
    ' gentle ball kicks',
    'trampling',
    'double penetration',
    'face sitting',
    'anal fisting',
    'reverse cowgirl',
    'masturbazione con oggetti',
    'dominazione con piedi',
    'cosplay free',
    'assist: CULO E FIGA',
    'assist: CULO E BOCCA',
    'assist: CULO E CULO',
    'assist: BOCCA E FIGA',
    'assist: LIMONE E  ASSIST FIGA',
    'assist: LIMONE E ASSIST CULO',
    'assist: LIMONE E ASSIST TUO CULO',
    'assist: LECCHI FIGA E ASSIST TUO CULO',
    'giocare con tette',
    'leccare tette',
    'spagnola',
    'pisciata testa U a F',
    'scopare ascella',

  ];



  onGenerateAction() {
    this.ambienti.forEach(a => a.occupanti.forEach(el => el.action = this.getRandomAction()))
  }
  getRandomAction(): string {
    const index = Math.floor(Math.random() * this.azioni.length);
    return this.azioni[index];
  }
  helper: { name: string; dimensions: number } = {
    name: '',
    dimensions: 0
  };


  onGenerateHelper() {


    const randomName = faker.person.firstName('male'); // solo nomi maschili
    const randomNumber = faker.number.int({ min: 12, max: 25 });

    this.helper = {
      name: randomName,
      dimensions: randomNumber
    };

  }


}
