import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FoodItemsComponent,
  GroceryListComponent,
} from './grocery-list/grocery-list.component';
import { ListOfPlacedStudentsComponent } from './list-of-placed-students/list-of-placed-students.component';
import { ListOfSchoolsComponent } from './list-of-schools/list-of-schools.component';
import { ListOfStudentsComponent } from './list-of-students/list-of-students.component';
import { ServicesEgComponent } from './services-eg/services-eg.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'list-of-students', component: ListOfStudentsComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'school-list', component: ListOfSchoolsComponent },
  { path: 'placed-students', component: ListOfPlacedStudentsComponent },
  { path: 'grocery-list', component: GroceryListComponent },
  { path: 'food-items', component: FoodItemsComponent, outlet: 'outlet_2' },
  { path: 'services', component: ServicesEgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
