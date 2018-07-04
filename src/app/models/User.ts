import { Device } from "src/app/models/Device";

export class User {
    public Id: number;
    public Username: string;    
    public Email: string;
    public FirstName: string;
    public LastName: string;
    public Devices: Array<Device>;



    constructor(Id:number, Username:string, Email:string) {
        this.Id = Id;
        this.Username = Username;
        this.Email = Email;
        this.Devices = new Array<Device>();
    }
}