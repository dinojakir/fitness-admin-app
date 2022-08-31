import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: any[];

  constructor() {
    this.menuItems = [
      { name: 'Postavke', link: '/pocetna', icon: 'dx-icon-bulletlist' },
    ];
  }

  ngOnInit(): void {}
}
