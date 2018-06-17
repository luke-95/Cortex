import { DeviceType } from "./DeviceType";

export class Device {    
    name: string;
    type: DeviceType;
    color: string;

    constructor(name:string, type:DeviceType) {
        this.name = name;
        this.type = type;
    }
    
    public static getTypeColor(type:DeviceType) {
        let color:string = "#9C27B0";
        switch(type) {
            case DeviceType.TempSensor: {
                color = "#9C27B0";
                break;
            }
            case DeviceType.Audio: {
                color = "#E91E63";
                break;
            }
            case DeviceType.Video: {
                color = "#2196F3";
                break;
            }
            case DeviceType.Security: {
                color = "#03A9F4";
                break;
            }
            case DeviceType.Sensor: {
                color = "#4CAF50";
                break;
            }
            case DeviceType.Appliance: {
                color = "#FF9800";
                break;
            }
        }
        return color;
    }
}
