import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-course-info-controls',
  standalone: true,
   imports: [
      NgOptimizedImage
   ],
  templateUrl: './course-info-controls.component.html',
  styleUrl: './course-info-controls.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseInfoControlsComponent {

}
