import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent {
  @Input() mainText!: string;
  @Input() secondText!: string;

  booleanoRicevuto: boolean = false;
  numeroDaVisualizzare: number = 16;
  comeRisposta: number[] = [0, 0];

  onEvent(event: any) {
    this.booleanoRicevuto = event;
  }

  // SECONDO ESEMPIO
  onNumber(event: any) {
    this.numeroDaVisualizzare = event;
  }

  // SECONDO ESEMPIO
  onAnswer(event: any) {
    this.comeRisposta = event;
  }

  //-----

  appString: string = 'Sono la stringa del padre';

  riceviStringaDalFiglio(event: any) {
    this.appString = event;
  }
}
