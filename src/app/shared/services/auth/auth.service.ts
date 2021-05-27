import { Injectable } from '@angular/core';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from '../../models/database/user.model';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  firebaseConfig = {
    apiKey: 'AIzaSyDXe0TgWIodgP94Upw30vd7AB41d8sH7oM',
    authDomain: 'meddit-4000a.firebaseapp.com',
    projectId: 'meddit-4000a',
    storageBucket: 'meddit-4000a.appspot.com',
    messagingSenderId: '688313026972',
    appId: '1:688313026972:web:110807f21fe7eb52dce059',
    measurementId: 'G-KZVFTMKHZ5'
  };

  user = new BehaviorSubject<User>(null);


  constructor(private router: Router) {
    firebase.initializeApp(this.firebaseConfig);
    firebase.analytics();
  }

  signup(email: string, password: string) {
    let errorMessage = null;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
      // Signed in userCredential.user
      const user = {
        id: null,
        uId: userCredential.user.uid,
        email: userCredential.user.email
      };
      console.log(user);
      this.user.next(user);
      this.router.navigate(['/home']);
      })
      .catch((error) => {
      const errorMsg = error.message;
      console.log(errorMsg);
      errorMessage = errorMsg;
    });
    return errorMessage;
  }

  login(email: string, password: string) {
    let errorMessage = null;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
      // Signed in
      const user = {
        id: null,
        uId: userCredential.user.uid,
        email: userCredential.user.email
      };
      this.user.next(user);
      console.log(user);
      this.router.navigate(['/home']);
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMessage);
        errorMessage = errorMsg;
    });
    return errorMessage;
  }

  logout() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      this.user.next(null);
      this.router.navigate(['/auth']);
    }).catch((error) => {
      // An error happened.
    });
  }
}
