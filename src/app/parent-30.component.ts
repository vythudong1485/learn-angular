import { Component, ViewChild } from '@angular/core';
import { Child30Component } from './child-30.component';

@Component({
    selector: 'app-parent-30',
    template: `
        <button (click)="addForChild();">Add for child</button>
        <app-child-30></app-child-30>
    `
})

export class Parent30Component {
    @ViewChild(Child30Component)
    myChild: Child30Component;

    addForChild(){
        this.myChild.value++;
    }
}