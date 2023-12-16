import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CourseService} from '../../services/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {catchError, EMPTY, switchMap} from 'rxjs';
import {CourseDetailsComponent} from '../../ui/course-details/course-details.component';
import {HeadingComponent} from '../../../shared/ui/atoms/heading/heading.component';

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
   course$ = this.route.params.pipe(
      switchMap(({id}) => this.courseService.getOne(id).pipe(
         catchError(() => {
            this.router.navigate(['/courses']);
            return EMPTY;
         })
      )),
   );

   constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) {
   }
}
