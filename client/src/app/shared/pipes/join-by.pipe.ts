import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
   name: 'joinBy',
   standalone: true
})
export class JoinByPipe implements PipeTransform {
   transform<T extends Record<string, any>>(value: T[], key: keyof T | null) {
      const array = !key ? value : value.map(obj => obj[key]);
      return array.join(', ');
   }
}
