import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() sendValue = new EventEmitter<boolean>();

  value: boolean = true;

  sendEvent(): void {
    this.sendValue.emit(this.value);
    console.log('valore inviato: ' + this.value);
  }

  // SECONDO ESEMPIO

  @Output() sendNumber = new EventEmitter<number>();
  numero: number = 2;

  sendNumberFunction(): void {
    this.sendNumber.emit(this.numero);
    console.log('numero inviato: ' + this.numero);
  }

  //  TERZO ESEMPIO
  @Output() numbers = new EventEmitter<number[]>();

  laRisposta: number[] = [4, 8, 15, 16, 23, 42];

  sendArray(): void {
    this.numbers.emit(this.laRisposta);
  }
}
