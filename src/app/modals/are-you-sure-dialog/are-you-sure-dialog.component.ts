import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-are-you-sure-dialog',
  templateUrl: './are-you-sure-dialog.component.html',
  styleUrls: ['./are-you-sure-dialog.component.css']
})
export class AreYouSureDialogComponent implements OnInit {
  private question: string;

  constructor(
    public dialogRef: MatDialogRef<AreYouSureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.question = this.data;
  }

  ngOnInit() {
  }

  answerYes() {
    this.dialogRef.close("yes");
  }

  answerNo() {
    this.dialogRef.close("no");
  }

}
