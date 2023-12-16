import {Injectable} from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class UtilityService {
   pluralize(count: number, singular: string, plural = `${singular}s`) {
      return count === 1 ? singular : plural;
   }
}
