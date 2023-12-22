import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'guess-the-number',
  templateUrl: './guess-the-number.component.html'
})
export class GuessTheNumberComponent {

  // The range where the game goes between
  public min: number = 1;
  public max: number = 10;
  // The number to guess
  public randomNumber: number = 0;
  // Game results
  public gameMessage: string = '';

  // The input to get the value and know if its ok
  @ViewChild('numberInput')
  public numberInput!: ElementRef<HTMLInputElement>;

  // We start the game when the random number is not 0 and without the message
  startTheGame() :void{
    // Returns a random integer from 1 to 10:
    this.randomNumber = Math.floor(Math.random() * this.max) + this.min;
    this.gameMessage = '';
  }

  checkNumber(): void {
    // We get the value of the input as integer, so we can check it with value
    const number = parseInt(this.numberInput.nativeElement.value);

    // Checking if the number is the same
    if (this.randomNumber === number) {
      // Setting the message
      this.gameMessage = 'Congratulations! You won the game!';
      // Restarting the game
      this.randomNumber = 0;
    } else {
      // Setting the message
      this.gameMessage = 'Oh... Try again!';
    }
  }

}
