import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories = []

  constructor(
    private categoryService: CategoryService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories()
    .subscribe(
      (data => {console.log(data);
      this.categories = data})
    );
 
  }
  deleteCategory(id) {
    this.categoryService.deleteCategory(id).subscribe();
    this.categories = this.categories.filter(element => element.id !== id);
  }

}





 
