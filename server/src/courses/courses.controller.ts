import {Controller, Get, Param} from '@nestjs/common';
import {CoursesService} from './courses.service';

@Controller('courses')
export class CoursesController {
   constructor(private coursesService: CoursesService) {}
   
   @Get() getAllCourses() {
      return this.coursesService.getAll();
   }
   
   @Get(':id')
   getCourseDetails(@Param('id') id: string) {
      return this.coursesService.findOne(+id);
   }
   
}
