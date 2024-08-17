import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-logo',
  templateUrl: './user-logo.component.html',
  styleUrls: ['./user-logo.component.css']
})
export class UserLogoComponent implements OnInit {
  isLoggedIn!: boolean;
  constructor() { }
  ngOnInit(): void {
    this.isLoggedIn = false;
  }

}
