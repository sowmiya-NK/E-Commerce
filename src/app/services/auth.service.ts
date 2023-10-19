import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor(private storage: StorageService) {}

  isValidUser(user: User): boolean {
    let users: User[] = this.storage.getAllUsers();
    let isUser: boolean = false;
    for (let u of users) {
      if (u.email === user.email && u.password === user.password) {
        this.storage.setLoggesInUser(u);
        isUser = true;
        break;
      }
    }
    return isUser;
  }

  logout() {
    return this.storage.removeLoggedInUser();
  }

  isLoggedIn(): boolean {
    return this.storage.isLoggedInUser();
  }
}
