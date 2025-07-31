import { Component, OnInit } from '@angular/core';
import { ARRAY_CAVALLE } from '../model/arrayCavalle';

// Categorie delle sfide
export const CATEGORIE = ['fisico', 'strategia', 'sopravvivenza', 'esibizione', 'improvvisazione'] as const;
export type Categoria = typeof CATEGORIE[number];

export interface CavallaBase {
  name: string;
  image: string;
  voto: number;
}

export interface Cavalla extends CavallaBase {
  stats: {
    [K in Categoria]: number;
  };
}
interface GruppoConPunteggio {
  squadra: Cavalla[];
  punteggio: number;
}


@Component({
  selector: 'app-game-five',
  templateUrl: './game-five.component.html',
  styleUrls: ['./game-five.component.css']
})
export class GameFiveComponent implements OnInit {

  cavalleConStats: Cavalla[] = [];
  squadre: Cavalla[][] = [];
  roundCorrente = 1;
  categoriaCorrente: Categoria | null = null;
  vincitore: Cavalla[] | null = null;
  logSfide: string[] = [];

  categorie = CATEGORIE;

  ngOnInit(): void {
    this.reset();
  }

  reset(): void {
    this.roundCorrente = 1;
    this.vincitore = null;
    this.logSfide = [];
    this.cavalleConStats = this.generaStatsPerCavalle([...ARRAY_CAVALLE]);
    this.squadre = this.creaSquadre(this.cavalleConStats);
    this.categoriaCorrente = null;
  }

  generaStatsPerCavalle(cavalle: CavallaBase[]): Cavalla[] {
    return cavalle.map(c => ({
      ...c,
      stats: this.generaStatsCasuali()
    }));
  }

  generaStatsCasuali(): Record<Categoria, number> {
    const stats: Partial<Record<Categoria, number>> = {};
    this.categorie.forEach(cat => {
      stats[cat] = Math.floor(Math.random() * 11);
    });
    return stats as Record<Categoria, number>;
  }

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

  estraiCategoria(): Categoria {
    return this.categorie[Math.floor(Math.random() * this.categorie.length)];
  }

  eseguiSfide(): void {
  this.logSfide = [];
  this.vincitore = null;
  this.categoriaCorrente = this.estraiCategoria();
  this.logSfide.push(`🎯 Categoria del round ${this.roundCorrente}: ${this.categoriaCorrente.toUpperCase()}`);

  const gruppiConPunteggio: GruppoConPunteggio[] = this.squadre.map((squadra, index) => {
    const punteggio = squadra.reduce((tot, cav) => tot + cav.stats[this.categoriaCorrente!], 0);
    this.logSfide.push(`🔹 Squadra ${index + 1} ha totalizzato ${punteggio} punti`);
    return { squadra, punteggio };
  });

  const nuoveSquadre: Cavalla[][] = [];

  for (let i = 0; i < gruppiConPunteggio.length; i += 4) {
    const gruppoDiGruppi = gruppiConPunteggio.slice(i, i + 4);

    const max = Math.max(...gruppoDiGruppi.map(g => g.punteggio));
    const vincitrici = gruppoDiGruppi.filter(g => g.punteggio === max);

    if (vincitrici.length === 1) {
      nuoveSquadre.push(vincitrici[0].squadra);
      const indiceVincente = this.squadre.indexOf(vincitrici[0].squadra);
      this.logSfide.push(`🏆 Gruppo ${i / 4 + 1}: Vince la squadra ${indiceVincente + 1} con ${max} punti`);
    } else {
      this.logSfide.push(`⚠️ Gruppo ${i / 4 + 1}: Pareggio tra ${vincitrici.length} squadre. Nessuna passa.`);
    }
  }

  if (nuoveSquadre.length === 1) {
    this.vincitore = nuoveSquadre[0];
    this.logSfide.push(`🎉 Torneo concluso! Squadra vincitrice: ${this.vincitore.map(c => c.name).join(', ')}`);
  }

  this.squadre = nuoveSquadre;
  this.roundCorrente++;
}


}
