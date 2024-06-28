import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(public afs: AngularFirestore) {
  }

  save(doc: string, data: any) {
    return this.afs.collection(doc).add(data)
  }

  getAll(doc: string) {
    return this.afs.collection(doc).snapshotChanges()
  }

  getOne(doc:string, id:string){
    return  this.afs.doc<any>(`${doc}/${id}`).valueChanges()
  }

  update(doc:string, id:string, data: any){
    return this.afs.doc(`${doc}/${id}`).update(data)
  }

  delete(doc:string, id:string){
    return this.afs.doc(`${doc}/${id}`).delete()
  }

}
