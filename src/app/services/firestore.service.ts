import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface Product {
  id: string,
  name: string,
  price: string
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private _firestore: AngularFirestore
  ) { }

  getProducts() {
    return this._firestore.collection<Product>('produtos').valueChanges()
  }

  getProduct(id: number) {
    return this._firestore.collection<Product>('produtos', ref => ref.where('id', '==', id)).valueChanges().pipe(
      map( (produtos: any) => {
        return produtos[0] || undefined;
      })
    )
  }

  setCollection(data: any, collection: any) {
    return this._firestore.collection(collection).add(data);
  }

  getColletion(collectionName: any) {
    return this._firestore.collection(collectionName).valueChanges();
  }

}
