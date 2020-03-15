import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0
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

  onChangeLength(value: string) {
    const parsedValue = parseInt(value)

    if (!isNaN(parsedValue)) {
      this.length = parsedValue
    }
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
