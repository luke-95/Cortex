import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'device-temp-sensor',
  templateUrl: './temp-sensor.component.html',
  styleUrls: ['./temp-sensor.component.css']
})
export class TempSensorComponent implements OnInit {
  constructor() { }
  // lineChart
  public lineChartLabels:Array<any> = [];
  public lineChartData:Array<any> = [
    {data: [], label: 'Series B'},
  ];

  public lineChartOptions:any = {
    responsive: true
  };

  ngOnInit() {
    this.initChartData();
    console.log("AYEAYE");
  }
  
  initChartData()
  {
    let index = 0;
    let data_count = 30;
    let data_temperature = 0;

    for (let i = 0; i < this.lineChartData.length; i++)
    {
      this.lineChartData[i].data = Array<number>();
      while(index < data_count)
      {
        index = index + 1;
        if (index % 2 == 0)
        {
          //push datapoint label
          this.lineChartLabels.push(index.toString());

          // push datapoint value
          data_temperature = Math.floor((Math.random() * 8) + 15);
          this.lineChartData[i].data.push(data_temperature);
        }
      }
    }
  }


  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 10) + 16);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
