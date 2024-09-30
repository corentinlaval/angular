import {Component, Input} from '@angular/core';
import {Product} from "../Product";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-productdetail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent {
  @Input() product : Product = {name:"", price:0};
}
