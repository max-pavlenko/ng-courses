import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CourseService} from '../../services/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {catchError, EMPTY, Observable, switchMap} from 'rxjs';
import {CourseDetailsComponent} from '../../ui/course-details/course-details.component';
import {HeadingComponent} from '../../../shared/ui/atoms/heading/heading.component';
import { Numerical } from '../../../shared/types/utils';
import { Course } from '../../models/course';

@Component({
   selector: 'app-course-page',
   standalone: true,
   imports: [
      AsyncPipe,
      CourseDetailsComponent,
      HeadingComponent
   ],
   templateUrl: './course-page.component.html',
   styleUrl: './course-page.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CoursePageComponent {
   @Input() set id(id: Numerical) {
      this.course$ = this.courseService.getOne(id).pipe(
         catchError(() => {
            this.router.navigate(['/courses']);
            return EMPTY;
         })
      )
   }
   course$!: Observable<Course>;

   constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) {
   }
}
