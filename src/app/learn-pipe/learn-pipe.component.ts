import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {

  day = new Date(2021, 4, 13);
  person = { name: 'Sehun', age: '28' };
  address = Promise.resolve('75 MXT');
  home = '10 Nguyen Cang';
  constructor() { }

  ngOnInit(): void {
  }

}
