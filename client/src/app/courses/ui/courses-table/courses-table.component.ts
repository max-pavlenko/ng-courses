import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Column} from '../../../shared/ui/atoms/table/table.types';
import {Course, Instructor} from '../../models/course';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {TableComponent} from '../../../shared/ui/atoms/table/table.component';
import {BadgeComponent} from '../../../shared/ui/atoms/badge/badge.component';
import {RouterLink} from '@angular/router';
import {TypedTemplateDirective} from '../../../shared/directives/typed-template.directive';

@Component({
   selector: 'app-courses-table',
   standalone: true,
   imports: [
      NgOptimizedImage,
      TableComponent,
      BadgeComponent,
      RouterLink,
      AsyncPipe,
      TypedTemplateDirective
   ],
   templateUrl: './courses-table.component.html',
   styleUrl: './courses-table.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesTableComponent {
   @Input({required: true}) courses: Course[] = [];
   tableContext!: { column: Column<Course>, $implicit: Course };
   courseColumns: Column<Course>[] = [
      {key: 'id', label: 'ID'},
      {key: 'imageUrl', label: 'Image'},
      {key: 'name', label: 'Name'},
      {key: 'status', label: 'Status'},
   ];

   getInstructorNames(instructors: Instructor[]) {
      return instructors.map(({name}) => name).join(', ');
   }
}
