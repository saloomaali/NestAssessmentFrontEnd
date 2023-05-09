import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
declare var $: any;
@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
}


