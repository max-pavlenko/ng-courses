import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
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

   constructor(public coursesService: CourseService) {
   }

   updateName(e: Event) {
      this.coursesService.patchFilters({
         name: (e.target as HTMLInputElement)?.value,
      });
   }

   updateStatus(status: FilterCourseStatus) {
      this.coursesService.patchFilters({status,});
   }

   resetFilters() {
      this.coursesService.patchFilters(DEFAULT_FILTERS);
   }

   findStatusOption(status: FilterCourseStatus) {
      return STATUS_OPTIONS.find(option => option.value === status)!;
   }
}
