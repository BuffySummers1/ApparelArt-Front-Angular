import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './Category/category-list/category-list.component';
import { CategoryAddComponent } from './Category/category-add/category-add.component';
import { CategoryEditComponent } from './Category/category-edit/category-edit.component';
import { ColorListComponent } from './Color/color-list/color-list.component';
import { CompositionListComponent } from './Composition/composition-list/composition-list.component';
import { GenderListComponent } from './Gender/gender-list/gender-list.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { ShapeListComponent } from './Shape/shape-list/shape-list.component';
import { SizeListComponent } from './Size/size-list/size-list.component';
import { TagListComponent } from './Tag/tag-list/tag-list.component';
import { CompositionEditComponent } from './Composition/composition-edit/composition-edit.component';
import { CompositionAddComponent } from './Composition/composition-add/composition-add.component';
import { ColorEditComponent } from './Color/color-edit/color-edit.component';
import { ColorAddComponent } from './Color/color-add/color-add.component';
import { GenderAddComponent } from './Gender/gender-add/gender-add.component';
import { GenderEditComponent } from './Gender/gender-edit/gender-edit.component';
import { ProductAddComponent } from './Product/product-add/product-add.component';
import { ProductEditComponent } from './Product/product-edit/product-edit.component';
import { ShapeAddComponent } from './Shape/shape-add/shape-add.component';
import { ShapeEditComponent } from './Shape/shape-edit/shape-edit.component';
import { SizeAddComponent } from './Size/size-add/size-add.component';
import { SizeEditComponent } from './Size/size-edit/size-edit.component';
import { TagAddComponent } from './Tag/tag-add/tag-add.component';
import { TagEditComponent } from './Tag/tag-edit/tag-edit.component';


const adminRoutes: Routes = [
    { path: '', component: CategoryListComponent},
    { path: 'category', component: CategoryListComponent},
    { path: 'category/add', component: CategoryAddComponent },
    { path: 'category/list', component: CategoryListComponent },
    { path: 'category/edit/:id', component: CategoryEditComponent },
    { path: 'color', component: ColorListComponent},
    { path: 'color/add', component: ColorAddComponent},
    { path: 'color/list', component: ColorListComponent },
    { path: 'color/edit/:id', component: ColorEditComponent},
    { path: 'composition', component: CompositionListComponent},
    { path: 'composition/add', component: CompositionAddComponent },
    { path: 'composition/list', component: CompositionListComponent },
    { path: 'composition/edit/:id', component: CompositionEditComponent},
    { path: 'gender', component: GenderListComponent },
    { path: 'gender/add', component: GenderAddComponent},
    { path: 'gender/list', component: GenderListComponent },
    { path: 'gender/edit/:id', component: GenderEditComponent},
    { path: 'product', component: ProductListComponent},
    { path: 'product/add', component: ProductAddComponent},
    { path: 'product/list', component: ProductListComponent },
    { path: 'product/edit/:id', component: ProductEditComponent },
    { path: 'shape', component: ShapeListComponent},
    { path: 'shape/add', component: ShapeAddComponent},
    { path: 'shape/list', component: ShapeListComponent},
    { path: 'shape/edit/:id', component: ShapeEditComponent},
    { path: 'size', component: SizeListComponent},
    { path: 'size/add', component: SizeAddComponent},
    { path: 'size/list', component: SizeListComponent},
    { path: 'size/edit/:id', component: SizeEditComponent},
    { path: 'tag', component: TagListComponent},
    { path: 'tag/add', component: TagAddComponent},
    { path: 'tag/list', component: TagListComponent},
    { path: 'tag/edit/:id', component: TagEditComponent},
    
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
