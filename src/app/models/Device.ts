import { DeviceType } from "./DeviceType";
import { AudioDevice } from "./AudioDevice";

export class Device {
    public Id: number;
    public Name: string;    
    public Type: string;
    public IsOnline: boolean;
    public IsFavorite: boolean;
    public Category: string;
    public AudioDevice: AudioDevice;
    public UserId: number;

    constructor(Id:number, Name:string, Type:string) {
        this.Id = Id;
        this.Name = Name;
        this.Type = Type;
        this.IsOnline = true;
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
                color = "#673AB7";
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
            case DeviceType.SmartLock: {
                color = "#1E88E5";
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
            case "TempSensor": {
                deviceType = DeviceType.TempSensor;
                break;
            }
            case "Appliance": {
                deviceType = DeviceType.Appliance;
                break;
            }
            case "SmartLock": {
                deviceType = DeviceType.SmartLock;
                break;
            }
            default: {
                deviceType = DeviceType.Other;
            }
        }
        return deviceType;
    }
}
