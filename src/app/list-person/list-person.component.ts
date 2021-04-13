import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    { name: 'Ti', age: '18' },
    { name: 'Teo', age: '17' },
    { name: 'Tom', age: '16' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  removePerson(name: string){
    const index = this.arrPeople.findIndex(f => f.name === name);
    this.arrPeople.splice(index, 1);
  }

}
