import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';


@Injectable()
export class FirebaseService {
  firestore: any;
  FIREBASE_CONFIG: any = {
    apiKey: 'AIzaSyDMBm2PKXCgXYsnCzhPDlzIfvJWY5qHJhU',
    authDomain: 'mypopcollect.firebaseapp.com',
    databaseURL: 'https://mypopcollect.firebaseio.com',
    storageBucket: 'mypopcollect.appspot.com',
    messagingSenderId: '268062376086',
    projectId: 'mypopcollect'
  };

  constructor(
  ) {
      this.initializeFirebase();
  }

  private initializeFirebase() {
    firebase.initializeApp(this.FIREBASE_CONFIG);
    this.firestore = firebase.firestore();
  }

  async getPopList(): Promise<any> {
    this.firestore.settings({timestampsInSnapshots: true});
    const listPop = await this.firestore.doc('data-pop/myHeroAcademia').get();
    return listPop.data();
  }
}