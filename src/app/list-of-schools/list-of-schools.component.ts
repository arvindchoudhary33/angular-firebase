import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-list-of-schools',
  templateUrl: './list-of-schools.component.html',
  styleUrls: ['./list-of-schools.component.css'],
})
export class ListOfSchoolsComponent implements OnInit {
  dataSource: any;
  id: any;
  schoolName: any;
  buildingName: any;
  constructor(private store: AngularFirestore) { }

  ngOnInit(): void {
    this.getAll();
  }

  displayedColumns: string[] = ['id', 'buildingName', 'schoolName', 'action'];

  add() {
    this.store.collection('list-of-school').add({
      schoolName: this.schoolName,
      buildingName: this.buildingName,
    });

    console.log(this.dataSource);
  }

  delete(id: string) {
    console.log(id);
    this.store.collection('list-of-school').doc(id).delete();
  }
  getAll() {
    this.store
      .collection('list-of-school')
      .snapshotChanges()
      .subscribe((response) => {
        this.dataSource = response.map((item) => {
          return Object.assign(
            { id: item.payload.doc.id },
            item.payload.doc.data()
          );
        });
      });
    console.log(this.dataSource.id);
  }
}
