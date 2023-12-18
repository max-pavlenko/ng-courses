import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Column} from '../../../shared/ui/atoms/table/table.types';
import {Course} from '../../models/course';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {TableComponent} from '../../../shared/ui/atoms/table/table.component';
import {BadgeComponent} from '../../../shared/ui/atoms/badge/badge.component';
import {RouterLink} from '@angular/router';
import {TypedTemplateDirective} from '../../../shared/directives/typed-template.directive';
import {JoinByPipe} from '../../../shared/pipes/join-by.pipe';

@Component({
   selector: 'app-courses-table',
   standalone: true,
   imports: [
      NgOptimizedImage,
      TableComponent,
      BadgeComponent,
      RouterLink,
      AsyncPipe,
      TypedTemplateDirective,
      JoinByPipe
   ],
   templateUrl: './courses-table.component.html',
   styleUrl: './courses-table.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesTableComponent {
   @Input({required: true}) courses: Course[] = [];
   readonly courseColumns: Column<Course>[] = [
      {key: 'id', label: 'ID'},
      {key: 'imageUrl', label: 'Image'},
      {key: 'name', label: 'Name'},
      {key: 'status', label: 'Status'},
   ];
   tableContext!: { column: Column<Course>, $implicit: Course };
}
