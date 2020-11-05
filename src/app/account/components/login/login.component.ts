import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public passwordHidden = true;
  public loginForm: FormGroup;
  public submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      ['current-password']: ['', [Validators.required]]
    });
  }

  public togglePassword(): void {
    this.passwordHidden = !this.passwordHidden;
  }

  public submit(): void {
    console.log(this.loginForm.value);
    this.submitted = true;

    if (this.loginForm.valid) {
      this.router.navigate(['admin']);
    }
  }
}
