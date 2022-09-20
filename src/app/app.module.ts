import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBskiJYa7Mtf5FBXt36ZR6Jffyex21kkcc",
      authDomain: "angular-blog-fa29f.firebaseapp.com",
      projectId: "angular-blog-fa29f",
      storageBucket: "angular-blog-fa29f.appspot.com",
      messagingSenderId: "105993470880",
      appId: "1:105993470880:web:1bf81027f5d39f61fd1ac5"

    }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
