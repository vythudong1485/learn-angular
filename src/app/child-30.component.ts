import { Component } from '@angular/core';

@Component({
    selector: 'app-child-30',
    template: `
        <h3>{{ value }}</h3>
    `
})

export class Child30Component {
    value = 0;
}