import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CourseService} from '../../services/course.service';
import CoursesPageComponent from './courses-page.component';
import {of} from 'rxjs';

describe('CoursesPageComponent', () => {
   let component: CoursesPageComponent;
   let fixture: ComponentFixture<CoursesPageComponent>;
   let mockCourseService: jasmine.SpyObj<CourseService>;

   beforeEach(() => {
      mockCourseService = jasmine.createSpyObj('CourseService', ['getAll'], ['filters$', 'filteredCourses$']);
      mockCourseService.getAll.and.returnValue(of([]));

      TestBed.configureTestingModule({
         imports: [CoursesPageComponent],
         providers: [
            { provide: CourseService, useValue: mockCourseService }
         ]
      });

      fixture = TestBed.createComponent(CoursesPageComponent);
      component = fixture.componentInstance;
   });

   it('should create the page', () => {
      expect(component).toBeTruthy();
   });

   it('should render title', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('h1')?.textContent).toEqual('Courses');
   });
});

