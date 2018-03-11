import { Component, OnInit } from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public carouselOne: NgxCarousel;

  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 3, sm: 3, md: 4, lg: 4, all: 0},
      slide: 1,
      speed: 1000,
      interval: 2000,
      point: {
        visible: false
      },
      load: 2,
      touch: false,
      loop: true,
      custom: 'banner'
    }
  }

  myfunc(event: Event) {

  }

}
