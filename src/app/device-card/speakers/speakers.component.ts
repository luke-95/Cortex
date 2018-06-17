import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'device-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  is_muted:boolean = false;
  mute_toggle_label = "Off"


  toggleMute() {
    this.is_muted = !this.is_muted;
    this.mute_toggle_label = this.is_muted? "On" : " Off";
  }

  constructor() { }

  ngOnInit() {
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 0) {
      return Math.round(value) + '%';
    }

    return value;
  }

}
