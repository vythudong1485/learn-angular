import { Component } from '@angular/core';

@Component ({
    templateUrl: './word.component.html',
    selector: 'app-word',
    styleUrls: ['./word.component.css']
})

export class WordComponent {
    en = 'Hello';
    vn = 'Xin chào';
    imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg'; 
    forgot = false;

    toggleForgot() {
        this.forgot = !this.forgot;
    }

}