import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})


export class DeviceCardComponent implements OnInit {

  type_to_name_dict = {
    'TempSensor' : 'Temperature sensor',
  }

  public readonly type_keys = Object.keys(this.type_to_name_dict);

  name = 'Device';
  type = 'TempSensor';

  constructor() {
    this.name = this.type_to_name_dict[this.type];
  }
  
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
