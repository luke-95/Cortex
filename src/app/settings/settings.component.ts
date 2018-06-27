import { Component, OnInit } from '@angular/core';
import { RemoveCategoryDialogComponent } from '../modals/remove-category-dialog/remove-category-dialog.component';
import { MatDialog } from '@angular/material';
import { AddCategoryDialogComponent } from '../modals/add-category-dialog/add-category-dialog.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public dialog: MatDialog) 
  {

  }

  ngOnInit() {
  }

  addCategory() {
    this.dialog.open(AddCategoryDialogComponent, {
      height: '300px',
      width: '400px',
      panelClass: 'slim-padding-dialogue'
    })
  }

  removeCategory() {
    let dialogRef = this.dialog.open(RemoveCategoryDialogComponent, {
      height: '160px',
      width: '400px',
      panelClass: 'slim-padding-dialogue'
    });
  }
}
