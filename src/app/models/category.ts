import { Device } from "src/app/models/Device";

export class Category {
    public name: string;
    public devices: Array<Device>;

    public constructor(name: string, devices:Array<Device>) {
        this.name = name;
        this.devices = devices;
    }
}
