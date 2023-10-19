import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  error: string = '';
  constructor(
    private stoarge: StorageService,
    private authService:AuthserviceService,
    private router: Router
  ) {}
  submit(loginForm: NgForm) {
    if (this.authService.isValidUser(loginForm.value)) {
      this.router.navigate(['/product'], { replaceUrl: true });
    } else {
      this.error = 'Invalid User';
    }
  }
}
