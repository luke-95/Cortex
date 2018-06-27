import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CategoriesService } from '../../services/categories-service/categories.service';

@Component({
  selector: 'add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.css']
})
export class AddCategoryDialogComponent implements OnInit {
  public new_category_name:string;
  public fill_category_flag:boolean;

  constructor( 
    public dialogRef: MatDialogRef<AddCategoryDialogComponent>,
    private _categoriesService: CategoriesService) 
  {

  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    if (this.new_category_name.length > 0) {
      this._categoriesService.addCategory(this.new_category_name, this.fill_category_flag);
      this.dialogRef.close();
    }
  }
}
