import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfPlacedStudentsComponent } from './list-of-placed-students/list-of-placed-students.component';
import { ListOfSchoolsComponent } from './list-of-schools/list-of-schools.component';
import { ListOfStudentsComponent } from './list-of-students/list-of-students.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'list-of-students', component: ListOfStudentsComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'school-list', component: ListOfSchoolsComponent },
  { path: 'placed-students', component: ListOfPlacedStudentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
