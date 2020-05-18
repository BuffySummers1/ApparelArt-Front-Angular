import { Category } from './../../../shared/model/Category';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/service/product.service';
import { CategoryService } from 'src/app/shared/service/category.service';
import { ColorService } from 'src/app/shared/service/color.service';
import { Router } from '@angular/router';
import { ShapeService } from 'src/app/shared/service/shape.service';
import { GenderService } from 'src/app/shared/service/gender.service';
import { Product } from 'src/app/shared/model/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  form: FormGroup;
  products = [];
  categories = [];
  genders = [];
  colors = [];
  shapes = [];
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private colorService: ColorService,
    private genderService: GenderService,
    private shapeService: ShapeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : ['', [Validators.required]],
      description : ['', [Validators.required]],
      price : [''],
      stockMax : [''],
      picture : [''],
      category : this.getCategories(),
      color : this.getColors(),
      gender : this.getGenders(),
      shape : this.getShapes(),

    });

  }

  getGenders() {
    this.genderService.getGenders()
      .subscribe(data => {
        this.genders = data;
      });
  }
  getCategories() {
    this.categoryService.getCategories()
      .subscribe(data => {
        this.categories = data;
      });
  }
  getColors() {
    this.colorService.getColors()
      .subscribe(data => {
        this.colors = data;
      });
  }
  getShapes() {
    this.shapeService.getShapes()
      .subscribe(data => {
        this.shapes = data;
      });
  }


  get f() { return this.form.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      const product = this.form.value as Product;
      console.log('le film est good ?')

      this.productService.addProduct(product)
      .subscribe(
        (data: Product) => {
          this.router.navigate(['/product/list']);
          console.log('le produit ?')

        },
        (err: Error) => console.log(err),
        () => console.log('Request has completed')
      );
      console.log(this.form.value);
    }
  }

}