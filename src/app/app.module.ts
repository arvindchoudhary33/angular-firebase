import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { ListOfStudentsComponent } from './list-of-students/list-of-students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { UserListComponent } from './user-list/user-list.component'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { ListOfSchoolsComponent } from './list-of-schools/list-of-schools.component';
import { ListOfPlacedStudentsComponent } from './list-of-placed-students/list-of-placed-students.component';
@NgModule({
  declarations: [
    AppComponent,
    ListOfStudentsComponent,
    UserListComponent,
    ListOfSchoolsComponent,
    ListOfPlacedStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBskiJYa7Mtf5FBXt36ZR6Jffyex21kkcc",
      authDomain: "angular-blog-fa29f.firebaseapp.com",
      projectId: "angular-blog-fa29f",
      storageBucket: "angular-blog-fa29f.appspot.com",
      messagingSenderId: "105993470880",
      appId: "1:105993470880:web:1bf81027f5d39f61fd1ac5"

    }),
    AngularFirestoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
