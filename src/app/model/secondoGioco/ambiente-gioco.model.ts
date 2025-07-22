import { AmbienteTipo } from './ambiente-tipo.enum';
import { WomanGame2 } from './womanGame2';

export class AmbienteGioco {
  occupanti: WomanGame2[] = [];

  constructor(
    public tipo: AmbienteTipo,
    public nome: string,
    public maxOccupanti: number
  ) {}

  aggiungiOccupante(woman: WomanGame2): boolean {
    if (this.occupanti.length < this.maxOccupanti) {
      this.occupanti.push(woman);
      return true;
    }
    return false;
  }

  rimuoviOccupante(woman: WomanGame2): boolean {
    const index = this.occupanti.indexOf(woman);
    if (index >= 0) {
      this.occupanti.splice(index, 1);
      return true;
    }
    return false;
  }

  èPieno(): boolean {
    return this.occupanti.length >= this.maxOccupanti;
  }
}
