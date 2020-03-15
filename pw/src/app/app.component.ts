import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false
  includeNumbers = false;
  includeSymbols = false;
  password = ''

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }
  
  onButtonClick() {
    console.log(`
      Letters: ${this.includeLetters}
      Numbers: ${this.includeNumbers}
      Symbols: ${this.includeSymbols}
    `);
    
    this.password = 'MY SUPER PASSWORD!!!'
  }
}
