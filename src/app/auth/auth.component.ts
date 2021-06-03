import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/services/auth/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    if (this.isLoginMode) {
      this.error = this.authService.login(username, email, password);
    } else {
      this.error = this.authService.signup(username, email, password);
    }

    form.reset();
    this.isLoading = false;
  }
}
