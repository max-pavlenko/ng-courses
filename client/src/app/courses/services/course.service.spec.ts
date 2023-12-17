import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CourseService} from './course.service';
import {DEFAULT_FILTERS, FILTER_COURSE_STATUS} from '../constants/filters';
import {CourseFilters} from '../models/filters';
import {Course, CourseStatus} from '../models/course';
import {API_URL} from '../../../api/api.constants';

describe('CourseService', () => {
   let service: CourseService;
   let httpTestingController: HttpTestingController;
   const courses: Course[] = [{ id: 0, name: 'Course 1', status: CourseStatus.PUBLISHED, instructors: [], imageUrl: '' }];

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [HttpClientTestingModule],
         providers: [CourseService],
      });

      service = TestBed.inject(CourseService);
      httpTestingController = TestBed.inject(HttpTestingController);
   });

   afterEach(() => {
      httpTestingController.verify();
   });

   it('should be created', () => {
      expect(service).toBeTruthy();
   });

   it('should retrieve courses', () => {
      service.getAll().subscribe((courses) => {
         expect(courses).toEqual(courses);
      });

      const req = httpTestingController.expectOne(`${API_URL}/courses`);
      expect(req.request.method).toEqual('GET');
      req.flush(courses);
   });

   it('should retrieve a course by id', () => {
      const course = courses[0];
      service.getOne(course.id).subscribe((c) => {
         expect(c).toEqual(course);
      });

      const req = httpTestingController.expectOne(`${API_URL}/courses/0`);
      expect(req.request.method).toEqual('GET');
      req.flush(course);
   });

   it('should update filters', () => {
      const filters: Partial<CourseFilters> = { name: 'asd', status: FILTER_COURSE_STATUS.DRAFT };
      service.patchFilters(filters);
      expect(service.filters$.value).toEqual({ ...DEFAULT_FILTERS, ...filters });
   });
});
