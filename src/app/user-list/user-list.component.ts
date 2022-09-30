import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  title = 'angular-firebase';

  dataSource: any;
  id: any;
  name: any;
  personalInfo: any;
  editObj: any;

  @ViewChild('btnShow')
  btnShow!: ElementRef;
  @ViewChild('btnClose')
  btnClose!: ElementRef;

  constructor(private store: AngularFirestore) {}

  ngOnInit() {
    this.getAll();
  }

  openDialog() {
    this.btnShow.nativeElement.click();
  }

  closeDialog() {
    this.btnClose.nativeElement.click();
  }

  clearEdit() {
    this.editObj = null;
    this.name = '';
    this.personalInfo = '';
  }

  add() {
    if (this.editObj) {
      this.store
        .collection('list')
        .doc(this.editObj.id)
        .update({ name: this.name, personalInfo: this.personalInfo });
    } else {
      this.store
        .collection('list')
        .add({ name: this.name, personalInfo: this.personalInfo });
    }
    this.closeDialog();
  }

  edit(id: string) {
    this.store
      .collection('list')
      .doc(id)
      .get()
      .subscribe((response) => {
        this.editObj = Object.assign({ id: response.id }, response.data());
        this.name = this.editObj.name;
        this.personalInfo = this.editObj.personalInfo;
        this.openDialog();
      });
  }

  delete(id: string) {
    this.store.collection('list').doc(id).delete();
  }

  getAll() {
    this.store
      .collection('list')
      .snapshotChanges()
      .subscribe((response) => {
        this.dataSource = response.map((item) => {
          return Object.assign(
            { id: item.payload.doc.id },
            item.payload.doc.data()
          );
        });
      });
  }
}
