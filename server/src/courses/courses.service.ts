import {Injectable, NotFoundException} from '@nestjs/common';
import {COURSES} from '../db/courses';
import {Course} from '../../../client/src/app/courses/models/course'

@Injectable()
export class CoursesService {
  getAll(): Course[] {
    return COURSES ?? [] as Course[];
  }

  findOne(id: number): Course {
    const course = COURSES[id];
    if (!course) {
      throw new NotFoundException(`No course found by provided ID: ${id}`);
    }
    return course;
  }
}
