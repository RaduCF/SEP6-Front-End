import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User, UserDB, LoginUser, UserLocal } from '../../models/database/user.model';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public user$: BehaviorSubject<LoginUser> = new BehaviorSubject<LoginUser>(null);

  constructor(private router: Router, private userService: UserService) {
    firebase.initializeApp(environment.firebaseConfig);
    firebase.analytics();
  }

  signup(userName: string, email: string, password: string) {
    let errorMessage = null;
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in userCredential.user
          const user = {
            firebase_id: userCredential.user.uid,
            username: userName
          };
          console.log(user);
          if (user.firebase_id) {
            this.userService.signUpUser(user);
          }
          // this.user$.next(user);
        })
        .catch((error) => {
          console.log(error.message);
          errorMessage = error.message;
        });
    } catch (error) {
      console.log(error);
      errorMessage = error.message;
    }
    return errorMessage;
  }

  login(userName: string, email: string, password: string) {
    let errorMessage = null;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = {
          id: null,
          firebase_id: userCredential.user.uid,
          username: userName
        };
        this.userService.loginUser(user);
        this.userService.user$.subscribe(u => {
          const userDb = {
            id: u.id,
            firebase_id: userCredential.user.uid,
            username: userName
          };
          console.log(userDb);

          this.user$.next(userDb);
          this.router.navigate(['/home']);
        });
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
      this.user$.next(null);
      this.router.navigate(['/auth']);
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }
}
