import {Controller, Get, Param} from '@nestjs/common';
import {CoursesService} from './courses.service';
import { Course } from '../../../client/src/app/courses/models/course';

@Controller('courses')
export class CoursesController {
   constructor(private coursesService: CoursesService) {}
   
   @Get() getAllCourses(): Course[] {
      return this.coursesService.getAll();
   }
   
   @Get(':id')
   getCourseDetails(@Param('id') id: string): Course {
      return this.coursesService.findOne(+id);
   }
   
}
