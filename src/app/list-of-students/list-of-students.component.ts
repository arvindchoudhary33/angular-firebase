import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-list-of-students',
  templateUrl: './list-of-students.component.html',
  styleUrls: ['./list-of-students.component.css'],
})
export class ListOfStudentsComponent implements OnInit {
  tableData: any;
  dataSource: any;
  id: any;
  rollNumber: any;
  name: any;
  email: any;
  phoneNumber: any;

  constructor(private store: AngularFirestore) { }

  ngOnInit(): void {
    this.getAll();
  }

  displayedColumns: string[] = [
    'email',
    'id',
    'name',
    'phoneNumber',
    'rollNumber',
    'action',
  ];

  add() {
    this.store.collection('list-of-students').add({
      name: this.name,
      rollNumber: this.rollNumber,
      email: this.email,
      phoneNumber: this.phoneNumber,
    });

    console.log(this.dataSource);
  }

  delete(id: string) {
    console.log(id)
    this.store.collection('list-of-students').doc(id).delete();
  }
  getAll() {
    this.store
      .collection('list-of-students')
      .snapshotChanges()
      .subscribe((response) => {
        this.dataSource = response.map((item) => {
          return Object.assign(
            { id: item.payload.doc.id },
            item.payload.doc.data()
          );
        });
      });
    console.log(this.dataSource.id)
  }

}
