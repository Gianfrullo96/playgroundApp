export const CATEGORIE = ['fisico', 'strategia', 'sopravvivenza', 'esibizione', 'improvvisazione'] as const;

export type Categoria = typeof CATEGORIE[number];

export interface Cavalla {
  name: string;
  image: string;
  voto: number;
  stats: {
    [K in Categoria]: number;
  };
}
