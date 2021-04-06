import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../account.service';

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
    private accountService: AccountService,
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
    this.submitted = true;

    if (this.loginForm.valid) {
      console.log(this.accountService.login(this.loginForm.value));
      
      if (this.accountService.login(this.loginForm.value)) {
        this.router.navigate(['admin']);
      }
    }
  }
}
