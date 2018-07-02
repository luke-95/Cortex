import { Component, OnInit, Input, Inject } from '@angular/core';
import { Category } from 'src/app/models/category';
import { DeviceType } from 'src/app/models/DeviceType';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-filter-dialog',
  templateUrl: './add-filter-dialog.component.html',
  styleUrls: ['./add-filter-dialog.component.css']
})
export class AddFilterDialogComponent implements OnInit {
  @Input() category: Category;
  public selected_filter: string;
  public filters:Array<string>;

  constructor(
    public dialogRef: MatDialogRef<AddFilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.category = this.data.category;
    this.filters = Object.keys(DeviceType);
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    if (this.filters.includes(this.selected_filter)) {
      this.category.addFilter(this.selected_filter);

      this.dialogRef.close();
    }
  }

}
