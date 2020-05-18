import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navbarOpen = false;
  connected: boolean;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
