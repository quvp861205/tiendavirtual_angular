import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorage} from '@angular/fire/storage';
import { observable, Observable } from 'rxjs';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFireStorage: AngularFireStorage
  ) { }

  createUser(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.angularFireAuth.signOut();
  }

  hasUser() {
    return this.angularFireAuth.authState;
    
  }

  
}
