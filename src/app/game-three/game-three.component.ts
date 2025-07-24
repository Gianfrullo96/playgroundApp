import { ChangeDetectorRef, Component, HostListener } from '@angular/core';

interface Person {
  name: string;
  x: number;
  y: number;
}

@Component({
  selector: 'app-game-three',
  templateUrl: './game-three.component.html',
  styleUrls: ['./game-three.component.css']
})
export class GameThreeComponent {


    constructor(private cd: ChangeDetectorRef) {}


  x = 0;
  y = 0;
  tileSize = 32;
  maxTilesX = 20;
  maxTilesY = 20;

  people: Person[] = [
    { name: 'Alice', x: 5, y: 5 },
    { name: 'Bob', x: 10, y: 3 },
    { name: 'Charlie', x: 15, y: 10 },
    { name: 'Diana', x: 2, y: 17 },
    { name: 'Eve', x: 7, y: 14 }
  ];

  message: string | null = null;

@HostListener('window:keydown', ['$event'])
handleKey(event: KeyboardEvent) {
  switch (event.key.toLowerCase()) {
    case 'w':
      if (this.y > 0) this.y--;
      this.message = null;
      break;
    case 's':
      if (this.y < this.maxTilesY - 1) this.y++;
      this.message = null;
      break;
    case 'a':
      if (this.x > 0) this.x--;
      this.message = null;
      break;
    case 'd':
      if (this.x < this.maxTilesX - 1) this.x++;
      this.message = null;
      break;
    case 'e':
      this.tryInteract();
      break;
  }
}

   tryInteract() {
    const person = this.people.find(p => Math.abs(p.x - this.x) <= 1 && Math.abs(p.y - this.y) <= 1);
    if (person) {
      this.message = `Parli con ${person.name}.`;
    } else {
      this.message = 'Non c\'è nessuno vicino con cui parlare.';
    }
    this.cd.detectChanges();  // forza aggiornamento vista
  }
}
