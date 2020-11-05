import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public passwordHidden = true;
  public registerForm: FormGroup;
  public submitted = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, lettersValidator]],
      lastName: ['', [Validators.required, lettersValidator]],
      email: ['', [Validators.required, Validators.email]],
      ['new-password']: ['', [
        Validators.required,
        Validators.minLength(8),
        lowercaseValidator,
        uppercaseValidator
      ]]
    });
  }

  public togglePassword(): void {
    this.passwordHidden = !this.passwordHidden;
  }

  public submit(): void {
    this.submitted = true;

    console.log(this.registerForm);
  }
}

/** A text must contain only letters */
export function lettersValidator(c: FormControl): { [key: string]: boolean | null } {
  const regex = /[A-Za-z]/g;

  if (regex.test(c.value)) {
    return null;
  } else {
    return { letters: true };
  }
}

/** A password must contain at least one lowercase letter */
export function lowercaseValidator(c: FormControl): { [key: string]: boolean | null } {
  const regex = /[a-z]/g;

  if (regex.test(c.value)) {
    return null;
  } else {
    return { lowercase: true };
  }
}

/** A password must contain at least one uppercase letter */
export function uppercaseValidator(c: FormControl): { [key: string]: boolean | null } {
  const regex = /[A-Z]/g;

  if (regex.test(c.value)) {
    return null;
  } else {
    return { uppercase: true };
  }
}
