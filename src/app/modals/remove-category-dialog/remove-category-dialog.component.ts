import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories-service/categories.service';
import { Category } from 'src/app/models/category';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'remove-category-dialog',
  templateUrl: './remove-category-dialog.component.html',
  styleUrls: ['./remove-category-dialog.component.css']
})
export class RemoveCategoryDialogComponent implements OnInit {
  public categories: Array<Category>;
  public selected_category:string;
  constructor(
    public dialogRef: MatDialogRef<RemoveCategoryDialogComponent>,
    private _categoriesService: CategoriesService) 
  {
    this.categories = _categoriesService.categories;

  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    if (this.selected_category != null )
    {
      this._categoriesService.removeCategory(this.selected_category)
      this.dialogRef.close();
    }
  }

}
