import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})


export class DeviceCardComponent implements OnInit {
  @Input() name: string;
  @Input() type:string;

  private type_to_name_dict = {
    'TempSensor' : 'Temperature sensor',
  }

  public readonly type_keys = Object.keys(this.type_to_name_dict);


  constructor() {

  }
  
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
