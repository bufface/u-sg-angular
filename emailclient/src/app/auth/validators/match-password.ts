import { Validator, FormGroup } from '@angular/forms'

export class MatchPassword implements Validator {
  validate(formGroup: FormGroup) {
    const { password, confirmation } = formGroup.value

    if (password === confirmation) {
      return null
    } else {
      return { passwordsDontMatch: true }
    }
  }
}
