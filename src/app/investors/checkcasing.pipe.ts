import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkcasing'
})
export class CheckcasingPipe implements PipeTransform {

  transform(value: string, args?: string[]): string {

    //convert quater to uppercase and then combine the quater and year entered
    return value.toUpperCase()+args;


  }

}
