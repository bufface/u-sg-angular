import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-equiation',
  templateUrl: './equiation.component.html',
  styleUrls: ['./equiation.component.css']
})
export class EquiationComponent implements OnInit {
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  }, [
    (form: AbstractControl) => {
      const { a, b, answer } = form.value

      if (a +b === parseInt(answer)) {
        return null;
      }

      return { addition: true }
    }
  ])

  constructor() { }

  ngOnInit(): void {
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
