import {Injectable, NotFoundException} from '@nestjs/common';
import {COURSES} from '../db/courses';

@Injectable()
export class CoursesService {
  getAll() {
    return COURSES ?? [];
  }

  findOne(id: number) {
    const course = COURSES[id];
    if (!course) {
      throw new NotFoundException(`No course found by provided ID: ${id}`);
    }
    return course;
  }
}
