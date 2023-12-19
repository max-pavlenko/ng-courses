import {ChangeDetectionStrategy, Component, Input, inject} from '@angular/core';
import {DEFAULT_FILTERS, STATUS_OPTIONS} from '../../constants/filters';
import {DropdownComponent} from '../../../shared/ui/atoms/dropdown/dropdown.component';
import {NgOptimizedImage} from '@angular/common';
import {TransparentButtonComponent} from '../../../shared/ui/atoms/transparent-button/transparent-button.component';
import {CourseService} from '../../services/course.service';
import {FilterCourseStatus} from '../../models/filters';

@Component({
   selector: 'app-courses-filters',
   standalone: true,
   imports: [
      DropdownComponent,
      NgOptimizedImage,
      TransparentButtonComponent
   ],
   templateUrl: './courses-filters.component.html',
   styleUrl: './courses-filters.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesFiltersComponent {
   readonly STATUS_OPTIONS = STATUS_OPTIONS;
   @Input({required: true}) filters = DEFAULT_FILTERS;
   coursesService = inject(CourseService)

   patchNameFilter(e: Event): void {
      this.coursesService.patchFilters({
         name: (e.target as HTMLInputElement)?.value,
      });
   }

   patchStatusFilter(status: FilterCourseStatus): void {
      this.coursesService.patchFilters({status});
   }

   resetFilters(): void {
      this.coursesService.patchFilters(DEFAULT_FILTERS);
   }

   findStatusOption(status: FilterCourseStatus)  { // no return type
      return STATUS_OPTIONS.find(option => option.value === status)!;
   }
}
