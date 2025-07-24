import { Component, OnInit } from '@angular/core';
import { AmbienteGioco } from '../model/secondoGioco/ambiente-gioco.model';
import { AmbienteTipo } from '../model/secondoGioco/ambiente-tipo.enum';
import { WomanGame2 } from '../model/secondoGioco/womanGame2';
import { Router } from '@angular/router';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-game-two',
  templateUrl: './game-two.component.html',
  styleUrls: ['./game-two.component.css']
})
export class GameTwoComponent implements OnInit {

  constructor(private router: Router) {

  }
  ambienti: AmbienteGioco[] = [];
  roomOrderOk: boolean = false;
  roomOrder: string[] = [];

  //nome- salute- voto- pic
  women: WomanGame2[] = [new WomanGame2('', '', 10,'')];

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
    this.ambienti = [
      new AmbienteGioco(AmbienteTipo.Sala, 'Sala', 4),
      new AmbienteGioco(AmbienteTipo.Letto, 'Camera da letto', 3),
      new AmbienteGioco(AmbienteTipo.Camera, 'Camera mia ', 1),
      new AmbienteGioco(AmbienteTipo.Cucina, 'Cucina', 2),
      new AmbienteGioco(AmbienteTipo.Garage, 'Garage', 1),
      new AmbienteGioco(AmbienteTipo.Bagno, 'Bagno Piccolo', 1),
      new AmbienteGioco(AmbienteTipo.Bagno, 'bBgno grande', 2),
      new AmbienteGioco(AmbienteTipo.Balcone, 'Balcone', 1),
      new AmbienteGioco(AmbienteTipo.Studio, 'Studio', 1),
      new AmbienteGioco(AmbienteTipo.Studio, 'Stanzino a lavoro', 1),

    ];

    console.log('Ambienti inizializzati:', this.ambienti);
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
  ];



  onGenerateAction(){
 this.ambienti.forEach(a => a.occupanti.forEach(el=> el.action = this.getRandomAction()))
  }
getRandomAction(): string {
  const index = Math.floor(Math.random() * this.azioni.length);
  return this.azioni[index];
}
helper: { name: string; dimensions: number } = {
  name: '',
  dimensions: 0
};


onGenerateHelper(){


  const randomName = faker.person.firstName('male'); // solo nomi maschili
const randomNumber = faker.number.int({ min: 12, max: 25 });

this.helper = {
  name: randomName,
  dimensions: randomNumber
};
  
}


}
