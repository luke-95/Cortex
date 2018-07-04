import { Device } from "./Device";
import { User } from "./User";

export class UserRegister {
    public Id: number;
    public Username: string;    
    public Email: string;
    public FirstName: string;
    public LastName: string;
    public PasswordHash: string;
    public Devices: Array<Device>;



    constructor(user: User, password: string) {
        this.Id = user.Id;
        this.Username = user.Username;
        this.Email = user.Email;
        this.FirstName = user.FirstName;
        this.LastName = user.LastName;
        this.PasswordHash = password;
        this.Devices = new Array<Device>();
    }
}