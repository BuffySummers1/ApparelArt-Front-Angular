import { FormBuilder } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryListComponent } from './Category/category-list/category-list.component';
import { CategoryEditComponent } from './Category/category-edit/category-edit.component';
import { CategoryAddComponent } from './Category/category-add/category-add.component';
import { TagAddComponent } from './Tag/tag-add/tag-add.component';
import { TagEditComponent } from './Tag/tag-edit/tag-edit.component';
import { TagListComponent } from './Tag/tag-list/tag-list.component';
import { CompositionListComponent } from './Composition/composition-list/composition-list.component';
import { CompositionAddComponent } from './Composition/composition-add/composition-add.component';
import { CompositionEditComponent } from './Composition/composition-edit/composition-edit.component';
import { SizeEditComponent } from './Size/size-edit/size-edit.component';
import { SizeAddComponent } from './Size/size-add/size-add.component';
import { SizeListComponent } from './Size/size-list/size-list.component';
import { ShapeListComponent } from './Shape/shape-list/shape-list.component';
import { ShapeAddComponent } from './Shape/shape-add/shape-add.component';
import { ShapeEditComponent } from './Shape/shape-edit/shape-edit.component';
import { GenderEditComponent } from './Gender/gender-edit/gender-edit.component';
import { GenderListComponent } from './Gender/gender-list/gender-list.component';
import { GenderAddComponent } from './Gender/gender-add/gender-add.component';
import { ColorAddComponent } from './Color/color-add/color-add.component';
import { ColorListComponent } from './Color/color-list/color-list.component';
import { ColorEditComponent } from './Color/color-edit/color-edit.component';
import { ProductEditComponent } from './Product/product-edit/product-edit.component';
import { ProductAddComponent } from './Product/product-add/product-add.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [CategoryListComponent, CategoryEditComponent, CategoryAddComponent, TagAddComponent, TagEditComponent, TagListComponent, CompositionListComponent, CompositionAddComponent, CompositionEditComponent, SizeEditComponent, SizeAddComponent, SizeListComponent, ShapeListComponent, ShapeAddComponent, ShapeEditComponent, GenderEditComponent, GenderListComponent, GenderAddComponent, ColorAddComponent, ColorListComponent, ColorEditComponent, ProductEditComponent, ProductAddComponent, ProductListComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule    
  ]
})
export class AdminModule { }
