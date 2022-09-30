import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-list-of-placed-students',
  templateUrl: './list-of-placed-students.component.html',
  styleUrls: ['./list-of-placed-students.component.css'],
})
export class ListOfPlacedStudentsComponent implements OnInit {
  dataSource: any;
  id: any;
  studentName: any;
  companyPlacedIn: any;

  constructor(private store: AngularFirestore) { }

  ngOnInit(): void {
    this.getAll();
  }

  displayedColumns: string[] = ['id', 'studentName', 'companyPlacedIn', 'actions'];

  add() {
    this.store.collection('list-of-placed-students').add({
      studentName: this.studentName,
      companyPlacedIn: this.companyPlacedIn,
    });
  }
  delete(id: string) {
    this.store.collection('list-of-placed-students').doc(id).delete();
  }

  getAll() {
    this.store
      .collection('list-of-placed-students')
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
