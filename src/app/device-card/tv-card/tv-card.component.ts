import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'device-tv',
  templateUrl: './tv-card.component.html',
  styleUrls: ['./tv-card.component.css'],
  animations: [
    trigger('powerState', [
      state('on', style({
        backgroundColor: '#e53935',
        color: '#ffffff',
        // transform: 'scale(1)'
      })),
      state('off',   style({
        backgroundColor: '#1E88E5',
        // transform: 'scale(1.05)'
      })),
      transition('off => on', animate('100ms ease-in')),
      transition('on => off', animate('100ms ease-out'))
    ])
  ]
})
export class TvCardComponent implements OnInit {
  public is_on: string;
  public power_button_text:string;
  public programs_and_shows = 
  {
    'TVR 1' : 'Cupa Mondiala: Argentina - Uruguay',
    'TVR 1 HD' : 'Cupa Mondiala: Argentina - Uruguay',
    'Antena 1' : 'X Factor',
    'Antena 1 HD' : 'X Factor',
    'PRO TV' : 'Apropo TV',
    'PRO TV HD' : 'Apropo TV'
  }
  public readonly program_names = Object.keys(this.programs_and_shows);
  public current_program: string;
  public current_show: string;
  public last_current_show: string;
  public last_current_program: string;
  public change_program_placeholder: string;


  constructor() { 
  }

  ngOnInit() {
    this.is_on = 'on';
    this.power_button_text = "Turn Off";
    this.current_program = this.program_names[this.getRandomIndex(0, this.program_names.length)];
    this.current_show = this.programs_and_shows[this.current_program];
    this.last_current_program = this.current_program;
    this.last_current_show = this.current_show;
    this.change_program_placeholder = "Change program";

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
  
  getRandomIndex(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  switchState() {
    this.is_on = this.is_on === 'on' ? 'off' : 'on';
    this.updateTexts();
    // console.log("new state: " + this.is_on);
  }

  isOn() {
    return this.is_on === 'on';
  }

  updateTexts() {
    if (this.isOn())
    {
      this.power_button_text = "Turn Off";
      this.change_program_placeholder = "Change program";
      this.current_program = this.last_current_program;
      this.current_show = this.last_current_show;
    }
    else
    {
      this.power_button_text = "Turn On";
      this.change_program_placeholder = "Turned OFF";
      this.current_program = "";
      this.current_show = "";
    }
    
  }

  programChanged(event) {
    if (this.isOn()) {
      this.current_show = this.programs_and_shows[this.current_program];
    }
  }
  
}
