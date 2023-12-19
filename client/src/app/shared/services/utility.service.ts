import {Injectable} from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class UtilityService { // looks like pipe to me
   pluralize(count: number, singular: string, plural = `${singular}s`) {
      return count === 1 ? singular : plural;
   }
}
