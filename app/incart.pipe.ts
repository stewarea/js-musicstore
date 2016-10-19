import { Pipe, PipeTransform } from '@angular/core';
import { Album } from './album.model';

@Pipe({
  name: 'incart',
  pure: false
})

export class InCartPipe implements PipeTransform {
  transform(input: Album[], selectedCart) {
    var output: Album[] = [];
    if(selectedCart === false) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].inCart === false) {
          output.push(input[i]);
      }
    }
    return output;
  } else if (selectedCart === true) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].inCart === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
