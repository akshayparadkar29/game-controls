import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  
  @Output() numberEmitted = new EventEmitter<number>();
  private intervalRef: any;
  private currentNumber = 1;

  ngOnInit() {}

  onStartGame() {
    this.intervalRef = setInterval(() => {
      this.numberEmitted.emit(this.currentNumber);
      this.currentNumber++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalRef);
  }
}
