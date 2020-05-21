import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/)
      ],
      [this.uniqueUsername.validate]
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    confirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
  }, { validators: [this.matchPassword.validate] })

  constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService
  ) { }

  ngOnInit(): void { }

  onSubmit() {
    if (this.authForm.invalid) {
      console.log('fired')
      return
    }

    const { confirmation, ...rest } = this.authForm.value
    this.authService.signup({
      ...rest,
      passwordConfirmation: confirmation
    })
      .subscribe({
        next: (resp) => {

        },
        error: (err) => {
          // No internet: err.status === 0
          if (!err.status) {
            this.authForm.setErrors({ noConnection: true })
          } else {
            this.authForm.setErrors({ unknowError: true })
          }
        }
      })
  }
}
