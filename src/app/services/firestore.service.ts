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

}
