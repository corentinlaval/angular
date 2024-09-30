import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [NgClass],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {

  value : number = 0;

  isSpecial: Boolean = false;

  @Input() name: string = "";

  @Input() initialValue: number = 0;

  @Input() incrementValue: number =  1;

  @Input() decrementValue: number = 1;

  @Output() incrementCountEvent = new EventEmitter<string>();

  increment(): void {
    this.value = this.value + this.incrementValue;
    this.incrementCountEvent.emit(this.name + "'s value is now equal to " + this.value);
    //this.isSpecial= !this.isSpecial;
  }
  decrement(): void {
    this.value = this.value - this.decrementValue;
    this.incrementCountEvent.emit(this.name + "'s value is now equal to " + this.value);
    //this.isSpecial= !this.isSpecial;
  }

  ngOnInit(): void {
    this.value =  this.initialValue;
  }
}
