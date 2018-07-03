import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddDeviceDialogComponent } from '../../modals/add-device-dialog/add-device-dialog.component';
import { AreYouSureDialogComponent } from '../../modals/are-you-sure-dialog/are-you-sure-dialog.component';

@Component({
  selector: 'device-smart-lock',
  templateUrl: './smart-lock.component.html',
  styleUrls: ['./smart-lock.component.css'],
  animations: [
    trigger('LockState', [
      state('Locked', style({
        backgroundColor: '#FFFFFF',
        color: '#e53935',
      })),
      state('Unlocked',   style({
        backgroundColor: '#FFFFFF',
        color: '#1E88E5',
      })),
      transition('Locked => Unlocked', animate('5ms ease-in')),
      transition('Unlocked => Locked', animate('5ms ease-out'))
    ])
  ]
})

export class SmartLockComponent implements OnInit {
  @Input() device;
  public status: string;
  public lock_button_text: string;
  private _dialog_result: string;

  public time_units = ["Seconds", "Hours", "Minutes", "Days", "Months"];
  public time_values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  public time_value: number;
  public time_unit: string;
  public status_color: string;

  public static snackbar_duration = 2000;

  constructor(public dialog: MatDialog,
    public snackBar: MatSnackBar) {
  }
  
  ngOnInit() {
    this.status = "Locked";
    this.lock_button_text = "Unlock";
    this.status_color = "#1E88E5";
  }

  isLocked() {
    return this.status === 'Locked';
  }

  toggleLock() {
    if (this.isLocked())
    {
      let dialogRef = this.dialog.open(AreYouSureDialogComponent, {
        width: '450px',
        panelClass: 'slim-padding-dialogue',
        data: this.lock_button_text + ' ' + this.device.Name
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: '${result}'`);
        this._dialog_result = result;
        /* Are you sure? == yes */
        if (this._dialog_result === "yes")
        {
          this.status = this.status === 'Locked' ? 'Unlocked' : 'Locked';
          this.updateTexts();
        }
      });
    }
    else
    {
      this.status = this.status === 'Locked' ? 'Unlocked' : 'Locked';
      this.updateTexts();
    }
  }

  updateTexts() {
    if (this.status === 'Locked')
    {
      this.lock_button_text = "Unlock";
      this.status_color = "#1E88E5";
    }
    else
    {
      this.lock_button_text = "Lock";
      this.status_color = "#e53935";
    }
  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: SmartLockComponent.snackbar_duration,
    });
  }

  setTimer()
  {
    if (this.time_value != undefined && this.time_unit != undefined)
    {
      let message:string = "Timer set: " + this.time_value + " " + this.time_unit;
      this.openSnackBar(message, "Lock Timer Set");
  
      this.time_value = undefined;
      this.time_unit = undefined;
    }

  }

}
