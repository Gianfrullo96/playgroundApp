import { Component, OnInit } from '@angular/core';
import { ARRAY_CAVALLE } from '../model/arrayCavalle';

// Categorie delle sfide
export const CATEGORIE = ['fisico', 'strategia', 'sopravvivenza', 'esibizione', 'improvvisazione'] as const;
export type Categoria = typeof CATEGORIE[number];

// Tipo base: quello usato nell'array originale (senza le stats)
export interface CavallaBase {
  name: string;
  image: string;
  voto: number;
}

// Tipo completo usato nel gioco
export interface Cavalla extends CavallaBase {
  stats: {
    [K in Categoria]: number;
  };
}

@Component({
  selector: 'app-game-five',
  templateUrl: './game-five.component.html',
  styleUrls: ['./game-five.component.css']
})
export class GameFiveComponent implements OnInit {

  cavalleConStats: Cavalla[] = [];       // Lista cavalle con stats generate
  squadre: Cavalla[][] = [];              // Gruppi da 4
  roundCorrente: number = 1;
  categoriaCorrente: Categoria | null = null;
  vincitore: Cavalla[] | null = null;
  logSfide: string[] = [];

  categorie = CATEGORIE;

  ngOnInit(): void {
    this.reset();
  }


  // Resetta il torneo da capo
  reset(): void {
    this.roundCorrente = 1;
    this.vincitore = null;
    this.logSfide = [];
    this.cavalleConStats = this.generaStatsPerCavalle([...ARRAY_CAVALLE]);
    this.squadre = this.creaSquadre(this.cavalleConStats);
    this.categoriaCorrente = null;
  }

  // Mappa ogni cavalla base con delle statistiche generate casualmente
  generaStatsPerCavalle(cavalle: CavallaBase[]): Cavalla[] {
    return cavalle.map(c => ({
      ...c,
      stats: this.generaStatsCasuali()
    }));
  }

  // Genera valori da 0 a 10 per ciascuna categoria
  generaStatsCasuali(): Record<Categoria, number> {
    const stats: Partial<Record<Categoria, number>> = {};
    this.categorie.forEach(cat => {
      stats[cat] = Math.floor(Math.random() * 11); // Valori da 0 a 10
    });
    return stats as Record<Categoria, number>;
  }

  // Divide in gruppi da 4 casualmente
  creaSquadre(cavalle: Cavalla[]): Cavalla[][] {
    const copie = [...cavalle];
    const squadre: Cavalla[][] = [];

    while (copie.length >= 4) {
      const squadra: Cavalla[] = [];
      for (let i = 0; i < 4; i++) {
        const idx = Math.floor(Math.random() * copie.length);
        squadra.push(copie.splice(idx, 1)[0]);
      }
      squadre.push(squadra);
    }

    return squadre;
  }

  // Estrae casualmente una categoria di sfida
  estraiCategoria(): Categoria {
    return this.categorie[Math.floor(Math.random() * this.categorie.length)];
  }

  // Simula un round singolo di sfide tra squadre
  eseguiSfide(): void {
    this.logSfide = [];
    this.vincitore = null;

    this.categoriaCorrente = this.estraiCategoria();
    this.logSfide.push(`Categoria del round: ${this.categoriaCorrente.toUpperCase()}`);

    const punteggiSquadre = this.squadre.map(sq =>
      sq.reduce((acc, cav) => acc + cav.stats[this.categoriaCorrente!], 0)
    );

    const maxPunteggio = Math.max(...punteggiSquadre);
    const vincitriciIndici = punteggiSquadre
      .map((p, idx) => (p === maxPunteggio ? idx : -1))
      .filter(idx => idx !== -1);

    if (vincitriciIndici.length > 1) {
      this.logSfide.push(`Pareggio tra squadre! Nessun vincitore per questo round.`);
      this.vincitore = null;
    } else {
      const indiceVincente = vincitriciIndici[0];
      this.logSfide.push(`Vince la squadra ${indiceVincente + 1} con ${maxPunteggio} punti.`);
      this.vincitore = this.squadre[indiceVincente];
      // Avanza solo la squadra vincente ai round successivi
      this.squadre = [this.squadre[indiceVincente]];
    }

    this.roundCorrente++;
  }


}
