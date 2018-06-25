import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tv-card',
  templateUrl: './tv-card.component.html',
  styleUrls: ['./tv-card.component.css']
})
export class TvCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  formatVolumeLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 0) {
      return Math.round(value) + '%';
    }

    return value;
  }
}
