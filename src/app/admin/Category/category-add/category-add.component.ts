import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/service/category.service';
import { Router } from '@angular/router';
import { Category } from '../../../shared/model/Category';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  form: FormGroup;
  categories = [];

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : ['', [Validators.required]],
    });

  }

  onSubmit(): void {
    if (this.form.valid) {
      const category = this.form.value as Category;
      console.log('ici cest bien ?')

      this.categoryService.addCategory(category)
      .subscribe(
        (data: Category) => {
          this.router.navigate(['admin/category/']);
        },
        (err: Error) => console.log(err),
        () => console.log('Request has completed')
      );
      console.log(this.form.value);
    }
  }
  deleteCategory(id) {
    this.categoryService.deleteCategory(id).subscribe();
    this.categories = this.categories.filter(element => element.id !== id);
  }
}
