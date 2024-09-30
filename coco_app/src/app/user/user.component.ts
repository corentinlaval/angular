import { Component } from '@angular/core';
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  firstName: string = 'John';
  isAdmin: boolean = true;

  skills: string[]= [
    "singing",
    "sleeping"
  ]

  Switch_role(): void {
    this.isAdmin= ! this.isAdmin;
  }
}
