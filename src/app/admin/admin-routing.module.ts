import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './Category/category-list/category-list.component';
import { CategoryAddComponent } from './Category/category-add/category-add.component';


const adminRoutes: Routes = [
    { path: '', component: CategoryListComponent},
    { path: 'category', component: CategoryListComponent},
    { path: 'category/add', component: CategoryAddComponent },
    { path: 'category/list', component: CategoryListComponent },
    
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
