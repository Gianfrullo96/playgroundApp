import { Component, OnInit } from '@angular/core';
import { ARRAY_CAVALLE_CON_STATS2 } from '../model/arrayCavalle';




export interface CavallaBase {
  name: string;
  image: string;
  voto: number;
}

// Categorie delle sfide
export const CATEGORIE = ['faccia', 'corpo', 'culo', 'tette', 'sensualita', 'intelligenza','maiala'] as const;
export type Categoria = typeof CATEGORIE[number];

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


  nomiBuffi = [
  'Draghi Infuocati',
  'Fenici Alate',
  'Ninja Ombra',
  'Robot Ribelli',
  'Unicorni Arcobaleno',
  'Lupi Lunari',
  'Tigri Tempestose',
  'Serpenti Sibilanti',
  'Cavalli Stellari',
  'Orsi Ribelli',
  'Leoni Ruggenti',
  'Gufi Saggi',
  'Squali Veloci',
  'Volpi Astute',
  'Pirati Pazzi',
  'Gladiatori Eroici'
];


  ngOnInit(): void {
    this.reset();
  }

  reset(): void {
    this.roundCorrente = 1;
    this.vincitore = null;
    this.logSfide = [];
    //this.cavalleConStats = this.generaStatsPerCavalle([...ARRAY_CAVALLE]);
    this.cavalleConStats = this.mapFromArrayCavalle([...ARRAY_CAVALLE_CON_STATS2]);
    this.squadre = this.creaSquadre(this.cavalleConStats);
    this.categoriaCorrente = null;
  }

mapFromArrayCavalle(cavalle: (CavallaBase & Record<string, any>)[]): Cavalla[] {
  return cavalle.map(c => ({
    ...c,
    stats: {
      faccia: c['faccia'],
      corpo: c['corpo'],
      culo: c['culo'],
      tette: c['tette'],
      sensualita: c['sensualita'],
      intelligenza: c['intelligenza'],
      maiala:c['maiala']
    }
  }));
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

  eseguiSfideold(): void {
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


eseguiSfide(): void {
  this.logSfide = [];
  this.vincitore = null;
  this.categoriaCorrente = this.estraiCategoria();
  
  this.logSfide.push(`\n🎯 ROUND ${this.roundCorrente} - Categoria: ${this.categoriaCorrente.toUpperCase()}\n`);
  
  // Calcolo punteggio squadre e dettagli singoli
  const gruppiConPunteggio: GruppoConPunteggio[] = this.squadre.map((squadra, index) => {
    this.logSfide.push(`🔹 Squadra ${index + 1}:`);
    
    let punteggio = 0;
    squadra.forEach((cavalla, idx) => {
      const stat = cavalla.stats[this.categoriaCorrente!] ?? 0;
      punteggio += stat;
      this.logSfide.push(`    - ${cavalla.name}: ${stat} punti`);
    });
    
    this.logSfide.push(`  → Totale Squadra ${index + 1}: ${punteggio} punti\n`);
    
    return { squadra, punteggio };
  });
  
  const nuoveSquadre: Cavalla[][] = [];
  
  // Gruppi di 4 squadre per sfida
  for (let i = 0; i < gruppiConPunteggio.length; i += 4) {
    const gruppoDiGruppi = gruppiConPunteggio.slice(i, i + 4);
    this.logSfide.push(`🛡️ Gruppo ${i / 4 + 1} - Sfida tra squadre ${i + 1} a ${i + gruppoDiGruppi.length}`);
    
    gruppoDiGruppi.forEach((g, idx) => {
      const squadraIndex = this.squadre.indexOf(g.squadra);
      this.logSfide.push(`    Squadra ${squadraIndex + 1} punteggio: ${g.punteggio}`);
    });
    
    const max = Math.max(...gruppoDiGruppi.map(g => g.punteggio));
    const vincitrici = gruppoDiGruppi.filter(g => g.punteggio === max);
    
    if (vincitrici.length === 1) {
      nuoveSquadre.push(vincitrici[0].squadra);
      const indiceVincente = this.squadre.indexOf(vincitrici[0].squadra);
      this.logSfide.push(`🏆 Vince la squadra ${indiceVincente + 1} con ${max} punti\n`);
    } else {
      const squadrePareggio = vincitrici
        .map(g => this.squadre.indexOf(g.squadra) + 1)
        .join(', ');
      this.logSfide.push(`⚠️ Pareggio tra squadre: ${squadrePareggio}. Nessuna passa.\n`);
    }
  }
  
  if (nuoveSquadre.length === 1) {
    this.vincitore = nuoveSquadre[0];
    this.logSfide.push(`🎉 TORNEO CONCLUSO! Squadra vincitrice: ${this.vincitore.map(c => c.name).join(', ')}\n`);
  } else if (nuoveSquadre.length === 0) {
    this.logSfide.push(`❌ Nessuna squadra passa al prossimo round.\n`);
  } else {
    this.logSfide.push(`➡️ Squadre passate al prossimo round: ${nuoveSquadre.length}\n`);
  }
  
  this.squadre = nuoveSquadre;
  this.roundCorrente++;
}




}
