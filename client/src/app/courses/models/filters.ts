import {ValueOf} from '../../shared/types/utils';
import {FILTER_COURSE_STATUS} from '../constants/filters';

export type CourseFilters = {
   name: string;
   status: FilterCourseStatus;
}

export type FilterCourseStatus = ValueOf<typeof FILTER_COURSE_STATUS>;
