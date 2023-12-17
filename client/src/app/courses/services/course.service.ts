import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../models/course';
import {BehaviorSubject, combineLatest, distinctUntilChanged, map} from 'rxjs';
import {DEFAULT_FILTERS} from '../constants/filters';
import {CourseFilters} from '../models/filters';
import {Numerical} from '../../shared/types/utils';
import {API_URL} from '../../../api/api.constants';

@Injectable({
   providedIn: 'root'
})
export class CourseService {
   filters$ = new BehaviorSubject(DEFAULT_FILTERS);
   filteredCourses$ = combineLatest([this.getAll(), this.filters$]).pipe(
      distinctUntilChanged(),
      map(([courses, filters]) => courses.filter(({name, status}) =>
         name.toLowerCase().includes(filters.name.toLowerCase()) && status.includes(filters.status)))
   );

   constructor(private http: HttpClient) {
   }

   getAll() {
      return this.http.get<Course[]>(`${API_URL}/courses`);
   }

   getOne(id: Numerical) {
      return this.http.get<Course>(`${API_URL}/courses/${id}`);
   }

   patchFilters(filters: Partial<CourseFilters>) {
      this.filters$.next({...this.filters$.value, ...filters});
   }
}
