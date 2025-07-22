import { Component, OnInit } from '@angular/core';
import { AmbienteGioco } from '../model/secondoGioco/ambiente-gioco.model';
import { AmbienteTipo } from '../model/secondoGioco/ambiente-tipo.enum';
import { WomanGame2 } from '../model/secondoGioco/womanGame2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-two',
  templateUrl: './game-two.component.html',
  styleUrls: ['./game-two.component.css']
})
export class GameTwoComponent implements OnInit {

  constructor(private router: Router) {

  }
  ambienti: AmbienteGioco[] = [];
  roomOrderOk:boolean= false;
roomOrder: string[] = [];

  //nome- salute- voto- pic
  women: WomanGame2[] = [new WomanGame2('', '', 10)];




  ngOnInit(): void {


    this.generateScenario();
    this.generateCavalle();



  }

  onPutCavalleIntoRoom() {
    this.putCavalleIntoRoom();
  }


  onRemoveCavalleFromRoom() {
    this.removeCavalleFromTheRoom()
  }



  generateScenario() {
    this.ambienti = [
      new AmbienteGioco(AmbienteTipo.Sala, 'Sala', 4),
      new AmbienteGioco(AmbienteTipo.Letto, 'Camera da letto', 3),
      new AmbienteGioco(AmbienteTipo.Camera, 'Camera mia ', 1),
      new AmbienteGioco(AmbienteTipo.Cucina, 'Cucina', 2),
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
      { name: 'Duo', image: 'assets/img/duo.jpg', voto: 90 },
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
    ];


    // Mappa ogni oggetto donna nel formato Donna richiesto
    this.women = defaultWomenData.map(
      donna => new WomanGame2(donna.name, donna.image, donna.voto)
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
    this.roomOrder=[];
    this.roomOrderOk=false;
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




}
