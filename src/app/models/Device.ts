import { DeviceType } from "./DeviceType";

export class Device {
    Id: number;
    Name: string;    
    Type: string;
    IsOnline: boolean;
    AudioDevice: Object;
    // color: string;

    constructor(Id:number, Name:string, Type:string) {
        this.Id = Id;
        this.Name = Name;
        this.Type = Type;
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

    public static stringToDeviceType(Type:string) {
        let deviceType:DeviceType;
        switch(Type) {
            case "Audio": {
                deviceType = DeviceType.Audio;
                break;
            }
            case "Video": {
                deviceType = DeviceType.Video;
                break;
            }
            case "Security": {
                deviceType = DeviceType.Security;
                break;
            }
            case "Sensor": {
                deviceType = DeviceType.Sensor;
                break;
            }
            case "Appliance": {
                deviceType = DeviceType.Appliance;
                break;
            }
            default: {
                deviceType = DeviceType.Other;
            }
        }
        return deviceType;
    }
}
