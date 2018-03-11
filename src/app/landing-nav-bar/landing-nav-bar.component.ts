import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing-nav-bar',
  templateUrl: './landing-nav-bar.component.html',
  styleUrls: ['./landing-nav-bar.component.scss']
})
export class LandingNavBarComponent implements OnInit {

  @Input() hasBackground: false;
  @Input() isLoggedIn: false; // temporary use only

  constructor() { }

  ngOnInit() {
  }

  background() {
    if (this.hasBackground) {
      return '$'
    }
  }

}
