import { Component, OnInit } from '@angular/core';
import {NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SwUpdate} from '@angular/service-worker';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private tokenCollections!: AngularFirestoreCollection<any>;

  constructor(
    private swUpdate: SwUpdate,
    private messaging: AngularFireMessaging,
    private angularFirestore: AngularFirestore
  ) {

    this.tokenCollections = this.angularFirestore.collection<any>('tokens');
  }

  ngOnInit() {
    this.updatePWA();
    this.requestPermission();
    this.listenNotifications();
  }

  //valida si hay una nueva version disponible y la descarga
  updatePWA() {
    this.swUpdate.available.subscribe(value => {
      console.log("swUpdate", value);
      window.location.reload(); //recarga profunda
    })
  }

  requestPermission() {
    this.messaging.requestToken
    .subscribe(token => {
      console.log("requestPermission", token);
      this.tokenCollections.add({token});
    })
  }


  listenNotifications() {
    this.messaging.messages
    .subscribe(message => {
      console.log("listenNotifications", message);
    });
  }
  
}
