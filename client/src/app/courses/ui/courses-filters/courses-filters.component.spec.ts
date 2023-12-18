import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CoursesFiltersComponent} from './courses-filters.component';
import {CourseService} from '../../services/course.service';
import {BehaviorSubject} from 'rxjs';
import {CourseFilters, FilterCourseStatus} from '../../models/filters';
import {DEFAULT_FILTERS, FILTER_COURSE_STATUS} from '../../constants/filters';

describe('CoursesFiltersComponent', () => {
   let component: CoursesFiltersComponent;
   let fixture: ComponentFixture<CoursesFiltersComponent>;
   let mockCourseService: jasmine.SpyObj<CourseService>;

   beforeEach(() => {
      mockCourseService = jasmine.createSpyObj('CourseService', ['patchFilters']);
      mockCourseService.filters$ = new BehaviorSubject<CourseFilters>(DEFAULT_FILTERS);

      TestBed.configureTestingModule({
         imports: [CoursesFiltersComponent],
         providers: [{ provide: CourseService, useValue: mockCourseService }],
      });

      fixture = TestBed.createComponent(CoursesFiltersComponent);
      component = fixture.componentInstance;
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('should update name filter on input change', () => {
      const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');
      inputElement.value = 'New Course';
      inputElement.dispatchEvent(new Event('input'));
      expect(mockCourseService.patchFilters).toHaveBeenCalledWith({ name: 'New Course' });
   });

   it('should update status filter on dropdown selection', () => {
      const statusOption: FilterCourseStatus = FILTER_COURSE_STATUS.DRAFT;
      component.patchStatusFilter(statusOption);
      expect(mockCourseService.patchFilters).toHaveBeenCalledWith({ status: statusOption });
   });

   it('should reset filters on button click', () => {
      component.resetFilters();
      expect(mockCourseService.patchFilters).toHaveBeenCalledWith(DEFAULT_FILTERS);
   });
});
