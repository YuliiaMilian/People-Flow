import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';

type LoginResponse = {
  accessToken: string;
};
@Component({
  selector: 'ngt-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxModule, ButtonModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private readonly httpClient: HttpClient,
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.httpClient.post<LoginResponse>('http://localhost:3000/auth/login', this.loginForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Login error:', error);
        },
      });
    }
  }
}
