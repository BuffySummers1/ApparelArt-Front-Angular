import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CategoryService } from 'src/app/shared/service/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  category;
  id: number;
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) 
  { 
    this.route.params
  .subscribe(params => this.id = params.id);
}
  

  ngOnInit(): void {
    this.getCategoryDetail(this.id);
    this.form = new FormGroup({
    name: new FormControl()
  });
  

}

// Get the category
getCategoryDetail(id: number) {
  this.categoryService.getCategoryDetail(id)
  .subscribe( data => {
    this.form.patchValue({
          name: data.name
        });
    });
}

onSubmit() {
  this.categoryService.editCategory(this.form.value, this.id)
      .subscribe(category => {
        this.router.navigate(['/admin/category']);
      });
  }


}
