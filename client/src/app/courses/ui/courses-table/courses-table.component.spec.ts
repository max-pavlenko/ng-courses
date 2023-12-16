import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CoursesTableComponent} from './courses-table.component';
import {Directive, Input} from '@angular/core';
import {Course} from '../../models/course';
import {FILTER_COURSE_STATUS} from '../../constants/filters';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

@Directive({
   selector: 'app-typed-template',
})
class MockTypedTemplateDirective {
   @Input() appTypedTemplate: any;
}

describe('CoursesTableComponent', () => {
   let component: CoursesTableComponent;
   let fixture: ComponentFixture<CoursesTableComponent>;

   const courses: Course[] = [
      {
         id: 0, imageUrl: 'path.svg', name: 'Course 1', status: FILTER_COURSE_STATUS.DRAFT, instructors: [
            {name: 'Instructor 1', image: 'path.svg'},
            {name: 'Instructor 2', image: 'path.svg'},
         ],
      },
   ];
   const mockActivatedRoute = {
      params: of([{id: courses[0].id}]),
   }

   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [MockTypedTemplateDirective],
         providers: [
            {provide: ActivatedRoute, useValue: mockActivatedRoute,},
         ],
         imports: [CoursesTableComponent, ],
      });

      fixture = TestBed.createComponent(CoursesTableComponent);
      component = fixture.componentInstance;
      component.courses = courses;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('should render table with correct columns and data', () => {
      const tableElement: HTMLElement = fixture.nativeElement.querySelector('.min-w-full');
      const columns = Array.from(tableElement.querySelectorAll('.font-bold'));
      const dataRows = Array.from(tableElement.querySelectorAll(`.row`));

      expect(columns.length).toEqual(component.courseColumns.length);
      expect(dataRows.length).toEqual(component.courses.length);
   });

   describe('getInstructorNames method', () => {
      const course = courses[0];

      it('process 2 instructors', () => {
         const duoInstructors = component.getInstructorNames(course.instructors);
         expect(duoInstructors).toContain('Instructor 1, Instructor 2');
      })

      it('process 1 instructor', () => {
         const soloInstructor = component.getInstructorNames([course.instructors[0]]);
         expect(soloInstructor).toContain('Instructor 1');
      })

   });
});
