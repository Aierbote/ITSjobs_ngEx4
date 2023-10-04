import { Component } from '@angular/core';

const uno: number = 1;
const quarantaquattro: number = 44;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'WebApplication';

  // Props of the Exercise
  mainText!: string;
  secondText!: string;

  temp: any[] = [10, '23', quarantaquattro, 57, uno, '2'];

  /* prima idea */
  // counter: number[] = [10, '23', quarantaquattro, 57, uno, '2'];

  /* seconda idea */
  // counter: number[] = Array.from(this.temp);

  /* terza idea */
  counter: number[] = this.temp.map((x) => {
    if (typeof x === typeof 'string') {
      return Number(x);
    }
    return x;
  });

  pari: number[] = this.counter.filter((x) => x % 2 == 0);
  dispari: number[] = this.counter.filter((x) => x % 2 != 0);
}
