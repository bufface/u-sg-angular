import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { delay, filter } from 'rxjs/operators'
import { MathValidators } from '../math-validators'

@Component({
  selector: 'app-equiation',
  templateUrl: './equiation.component.html',
  styleUrls: ['./equiation.component.css']
})
export class EquiationComponent implements OnInit {
  secondsPerSolution = 0
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  }, [ MathValidators.addition('answer', 'a', 'b') ])

  constructor() { }

  ngOnInit() {
    const startTime = new Date()
    let numberSolved = 0

    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(500)
      ).subscribe(() => {
        numberSolved++
        this.secondsPerSolution = (
          new Date().getTime() - startTime.getTime()
        ) / numberSolved / 1000
      
        this.mathForm.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: ''
        })
    })
  }

  get a () {
    return this.mathForm.value.a
  }

  get b () {
    return this.mathForm.value.b
  }

  randomNumber() {
    return Math.floor(Math.random() * 10)
  }
}
