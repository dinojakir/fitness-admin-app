import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { map, Observable } from 'rxjs';

export enum Documents {
  Exercises = 'Exercises',
  Muscles = 'Muscles',
  Props = 'Props',
  Trainers = 'Trainers',
  Trainings = 'Trainings',
}

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private firestore: AngularFirestore) {}

  getData(name: string): Observable<any[]> {
    return this.firestore
      .collection(name)
      .get()
      .pipe(
        map((item: firebase.firestore.QuerySnapshot<unknown>) => {
          return item.docs.map(
            (dataItem: firebase.firestore.QueryDocumentSnapshot<unknown>) =>
              dataItem.data()
          );
        })
      );
  }
}
