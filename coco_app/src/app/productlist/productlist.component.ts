import { Component } from '@angular/core';
import {Product} from "../Product";
import {NgForOf} from "@angular/common";
import {ProductdetailComponent} from "../productdetail/productdetail.component";

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [
    NgForOf,
    ProductdetailComponent
  ],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {

  Products : Product [] = [
    { name:"TVLG",price : 100 },
    { name:"TVPhilips", price: 10, discount: 20}
    ]
}
