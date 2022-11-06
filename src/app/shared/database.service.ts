import { isNgTemplate } from '@angular/compiler';
import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService implements OnInit {
  commonSubject: Subject<[]> = new BehaviorSubject<[]>([]);

  ngOnInit() {}
  constructor(private store: AngularFirestore) {}
  add(data: any, collectionName: string) {
    this.store.collection(collectionName).add(data);
  }

  delete(id: string) {
    console.log(id);
    // this.store.collection('list-of-school').doc(id).delete();
  }
  getAll(collectionName: string) {
    let someData: any;
    this.store
      .collection(collectionName)
      .snapshotChanges()
      .subscribe((response) => {
        someData = response.map((item) => {
          return Object.assign(
            { id: item.payload.doc.id },
            item.payload.doc.data()
          );
        });
        console.log(collectionName, someData);
        this.commonSubject.next(someData);
      });
    return this.commonSubject;
  }
}
