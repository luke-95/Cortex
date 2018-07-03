export class AudioDevice {

    constructor(Id:number, Volume:number, IsMuted: boolean)
    {
        this.Id = Id;
        this.Volume = Volume;
        this.IsMuted = IsMuted;
    }

    public Id: number;
    public Volume: number;
    public IsMuted: boolean;
}