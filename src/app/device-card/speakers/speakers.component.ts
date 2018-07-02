import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'device-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  public now_playing:string;
  public is_paused: boolean;
  public status_label: string;
  public play_pause_button: string;
  private songs = [
    'Childish Gambino - This is America',
    'Șuie Paparude - Omul de Gheață',
    'AC Slater - Bass Inside',
    'Kid Cudi - Reborn',
    'Massive Attack - Angel',
    'Kid Cudi - Kids See Ghosts', 
    'Glass Animals - Black Mambo',
    'Phantogram - K.Y.S.A.',
    'MC Eiht & Freddie Gibbs - Welcome to Los Santos (feat. Kokane)',
    'Deliric x Silent Strike - Tesla',
    'Run The Jewels - Run The Jewels',
    'Run The Jewels - Close Your Eyes (And count to)',
    'Run The Jewels - Blockbuster Night Part 1',
    'YG - Still Brazy',
    'Kendrick Lamar - M.A.A.D City',
    'Aesop Rock - Kirby'
  ]

  private previous_songs: Array<string>;
  private paused_song: string;


  is_muted:boolean = false;
  mute_toggle_label = "Off"


  toggleMute() {
    this.is_muted = !this.is_muted;
    this.mute_toggle_label = this.is_muted? "On" : " Off";
  }

  constructor(private breakpointObserver: BreakpointObserver,) { 
    this.is_paused = false;
    this.status_label = "Now Playing:"
    this.play_pause_button = "play_arrow";
    this.now_playing = this.getRandomSong();
    this.paused_song = this.now_playing;
    this.previous_songs = [];

    this.playPause();
  }

  ngOnInit() {

  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 0) {
      return Math.round(value) + '%';
    }

    return value;
  }

  playPause() {
    this.is_paused = !this.is_paused;

    if (this.is_paused) {
      this.paused_song = this.now_playing;
      this.now_playing = "P A U S E D";
      this.play_pause_button = "paused";
    }
    else
    {
      this.now_playing = this.paused_song;
      this.play_pause_button = "play_arrow";
    }
  }
  

  playNext() {
    if (this.previous_songs.length > 19) {
      this.previous_songs.shift();
    }
    this.previous_songs.push(this.now_playing);
    this.now_playing = this.getRandomSong();
  }

  playPrev() {
    if (this.previous_songs.length > 0)
    {
      this.now_playing = this.previous_songs.pop();
    }
  }

  isExtraSmallScreen$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall])
  .pipe(
    map(result => result.matches),
  )

  isSmallScreen$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small])
  .pipe(
    map(result => result.matches),
  )

  getRandomIndex(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomSong() 
  {
    return this.songs[this.getRandomIndex(0, this.songs.length)];
  }

  
}
