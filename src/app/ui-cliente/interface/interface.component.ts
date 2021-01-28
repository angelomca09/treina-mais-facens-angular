import { FirestoreService, Product } from './../../services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {
  produto$: any

  constructor(
    private firestore: FirestoreService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if ( ! paramMap.has('product') ) {
        this.router.navigateByUrl('/produtos')
      }

      let id = paramMap.get('product') || 0
      this.produto$ = this.firestore.getProduct(+id)
    })
  }

}
