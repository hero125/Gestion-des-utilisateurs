import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
collectionName='user';
  constructor(
    private auth: AngularFireAuth, 
    private firestore:AngularFirestore) { }
  register(email,password){
    return new Promise<any>((resolve, rejects) => {
      this.auth.createUserWithEmailAndPassword(email,password).then(
      res =>resolve(res),
      erreur =>rejects(erreur)
    )
  })
  }

  authenfication(email, password){
    return new Promise<any>((resolve, rejects) => {
      this.auth.signInWithEmailAndPassword(email, password).then (
        res=>resolve(res),
        erreur=>rejects(erreur)
      )
    })
  }

  listeUser(){
  return  this.firestore.collection(this.collectionName).snapshotChanges();
  }
  userdetail(){
    return this.auth.user;
  }
}