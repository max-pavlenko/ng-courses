import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {CourseService} from '../../services/course.service';
import {CoursesTableComponent} from '../../ui/courses-table/courses-table.component';
import {CoursesFiltersComponent} from '../../ui/courses-filters/courses-filters.component';
import {HeadingComponent} from '../../../shared/ui/atoms/heading/heading.component';

@Component({
   selector: 'app-courses-page',
   standalone: true,
   imports: [
      AsyncPipe,
      CoursesTableComponent,
      CoursesFiltersComponent,
      HeadingComponent
   ],
   templateUrl: './courses-page.component.html',
   styleUrl: './courses-page.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CoursesPageComponent {
   constructor(protected coursesService: CourseService) {
   }
}
