import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListOfStudentsComponent } from './list-of-students/list-of-students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { UserListComponent } from './user-list/user-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ListOfSchoolsComponent } from './list-of-schools/list-of-schools.component';
import { ListOfPlacedStudentsComponent } from './list-of-placed-students/list-of-placed-students.component';
import {
  GroceryListComponent,
  FoodItemsComponent,
} from './grocery-list/grocery-list.component';
import { ServicesEgComponent } from './services-eg/services-eg.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { FitnessClubComponent } from './fitness-club/fitness-club.component';
import { AngularComponentsComponent } from './angular-components/angular-components.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { CustomDirective } from './directives/custom.directive';
import { CustomStructuralDirectiveDirective } from './directives/custom-structural-directive.directive';
import { ToggleDirectiveDirective } from './directives/toggle-directive.directive';
import { TooltipDirectiveDirective } from './directives/tooltip-directive.directive';
import { MatSelectModule } from '@angular/material/select';
import { TravelCompanyComponent } from './template-driven-forms/travel-company/travel-company.component';
import { EventBookingComponent } from './template-driven-forms/event-booking/event-booking.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    ListOfStudentsComponent,
    UserListComponent,
    ListOfSchoolsComponent,
    ListOfPlacedStudentsComponent,
    CustomStructuralDirectiveDirective,
    GroceryListComponent,
    FoodItemsComponent,
    ServicesEgComponent,
    StudentMarksComponent,
    FitnessClubComponent,
    AngularComponentsComponent,
    DirectivesComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    CustomDirective,
    ToggleDirectiveDirective,
    TooltipDirectiveDirective,
    TravelCompanyComponent,
    EventBookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatSelectModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBskiJYa7Mtf5FBXt36ZR6Jffyex21kkcc',
      authDomain: 'angular-blog-fa29f.firebaseapp.com',
      projectId: 'angular-blog-fa29f',
      storageBucket: 'angular-blog-fa29f.appspot.com',
      messagingSenderId: '105993470880',
      appId: '1:105993470880:web:1bf81027f5d39f61fd1ac5',
    }),
    AngularFirestoreModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
