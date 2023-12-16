import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ChipComponent} from '../../../shared/ui/atoms/chip/chip.component';
import {CourseInfoControlsComponent} from '../course-info-controls/course-info-controls.component';
import {FigureComponent} from '../../../shared/ui/atoms/figure/figure.component';
import {NgOptimizedImage} from '@angular/common';
import {Course} from '../../models/course';
import {UtilityService} from '../../../shared/services/utility.service';

@Component({
   selector: 'app-course-details',
   standalone: true,
   imports: [
      ChipComponent,
      CourseInfoControlsComponent,
      FigureComponent,
      NgOptimizedImage
   ],
   templateUrl: './course-details.component.html',
   styleUrl: './course-details.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailsComponent {
   @Input({required: true}) course!: Course;

   constructor(protected utilityService: UtilityService) {
   }
}
