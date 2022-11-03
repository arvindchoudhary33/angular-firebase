import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponentsComponent } from './angular-components/angular-components.component';
import { DirectivesComponent } from './directives/directives.component';
import { FitnessClubComponent } from './fitness-club/fitness-club.component';
import {
  FoodItemsComponent,
  GroceryListComponent,
} from './grocery-list/grocery-list.component';
import { ListOfPlacedStudentsComponent } from './list-of-placed-students/list-of-placed-students.component';
import { ListOfSchoolsComponent } from './list-of-schools/list-of-schools.component';
import { ListOfStudentsComponent } from './list-of-students/list-of-students.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ServicesEgComponent } from './services-eg/services-eg.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'list-of-students', component: ListOfStudentsComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'school-list', component: ListOfSchoolsComponent },
  { path: 'placed-students', component: ListOfPlacedStudentsComponent },
  { path: 'grocery-list', component: GroceryListComponent },
  { path: 'food-items', component: FoodItemsComponent, outlet: 'outlet_2' },
  { path: 'services', component: ServicesEgComponent },
  { path: 'student-result', component: StudentMarksComponent },
  { path: 'fitness-club', component: FitnessClubComponent },
  { path: 'reactive-form', component: ReactiveFormsComponent },
  { path: 'template-form', component: TemplateDrivenFormsComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'angular-components', component: AngularComponentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
