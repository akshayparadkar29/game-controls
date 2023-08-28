import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-controls';
  currentNumber: number=0;
  isOdd: any;

  onNumberEmitted(number: number) {
    this.currentNumber = number;
    this.isOdd = number % 2 !== 0;
  }
}
