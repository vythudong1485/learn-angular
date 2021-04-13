import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;
  @Output() clickRemove = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  Delete(){
    this.clickRemove.emit(this.name);
  }

}
