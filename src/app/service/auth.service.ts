import { Injectable, OnInit } from '@angular/core';
import { IAuthService } from './auth.interface';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService,OnInit {
  isLogIn: boolean = false;
  loginUser: User|null = null;
  users: User[] = [];
  constructor() { }
  login(user: User): boolean {
    this.users.forEach(element => {
      if (element.email == user.email && element.password == user.password) {
        this.isLogIn = true;
        this.loginUser = element;
        return true;
      }
    });
    return false;
  }
  logout(): void {
    this.isLogIn = false;
    this.loginUser = null;
  }
  signup(user: User): string {
    this.users.forEach(element => {
      if (element.email == user.email)
        throw new Error("Email already exists");
    });
    this.users.push(user);
    return "User registered successfully";
  }
  isLoggedIn(): boolean {
    return this.isLogIn;
  }
  ngOnInit(): void {
    this.users = [
      new User('Admineswarrao', 'admin@gnn.com', 'admin', 'admin', true, new Date('02/02/2024'), new Date('04/02/2024'), null),
      new User('Userin', 'user@gnn.com', 'user', 'user', true, new Date('12/02/2024'), new Date('14/02/2024'), null),
      new User('Staffene', 'staff@gnn.com', 'staff', 'staff', true, new Date('22/02/2024'), new Date('24/02/2024'), null),
    ];
  }
}
