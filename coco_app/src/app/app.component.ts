import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MessageComponent} from "./message/message.component";
import {OrdiComponent} from "./ordi/ordi.component";
import {CounterComponent} from "./counter/counter.component";
import {UserComponent} from "./user/user.component";
import {ConsoleLogger} from "@angular/compiler-cli";
import {ProductdetailComponent} from "./productdetail/productdetail.component";
import {ProductlistComponent} from "./productlist/productlist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports : [MessageComponent, OrdiComponent, CounterComponent, UserComponent, ProductdetailComponent, ProductlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Application de Corentin';
  user :string = 'Coco';

  logCountMessages(message: string): void {
    console.log(message);
  }
}
