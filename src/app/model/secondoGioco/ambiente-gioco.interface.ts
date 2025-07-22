import { AmbienteTipo } from "./ambiente-tipo.enum";

export interface IAmbienteGioco {
  tipo: AmbienteTipo;
  nome: string;
  maxOccupanti: number;
  occupanti?: string[];
}
