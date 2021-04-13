import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'roundNum'
})

export class RoundPipe implements PipeTransform {
    transform(value: number, isUpper) : number {
        if(isUpper){
            return Math.ceil(value);
        }
        return Math.floor(value);
    }
}