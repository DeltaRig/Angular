import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titleCasting'
})

export class TitleCastingPipe implements PipeTransform {
    transform(value: any, args?: any) {
        if (!value)
            return null;
        
        let prepositions: string[] = ["of", "the", "is", "a", "with", "at", "from", "into", "to", "in", "on", "for"];

        let progress: string[] = value.split(' ');

        let result = progress[0][0].toUpperCase() + progress[0].slice(1) + " ";

        for(let i = 1; i < progress.length; i++){
            if(prepositions.includes(progress[i].toLowerCase())){
                result = result + progress[i] + " ";
            } else {
                result = result + progress[i][0].toUpperCase() + progress[i].slice(1) + " ";
            }
            
        }
        return result;
    }
}