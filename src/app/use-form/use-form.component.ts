import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-form',
  templateUrl: './use-form.component.html',
  styleUrls: ['./use-form.component.css']
})
export class UseFormComponent implements OnInit {

  name = '';
  isHighlight = true;
  evenStyle = { color: 'red', fontSize: '40px' }
  oddStyle = { color: 'green', fontSize: '20px' }
  currentClass = {cicrle: !this.isHighlight, square: this.isHighlight};

  constructor() { }

  ngOnInit(): void {
  }


}
