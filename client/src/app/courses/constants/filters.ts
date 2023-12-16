import {Option} from '../../shared/ui/atoms/option/option.types';
import {CourseFilters, FilterCourseStatus} from '../models/filters';
import {CourseStatus} from '../models/course';

export const FILTER_COURSE_STATUS = {...CourseStatus, ...({EMPTY: ''} as const)};
export const DEFAULT_FILTERS: CourseFilters = {name: '', status: FILTER_COURSE_STATUS.EMPTY};

export const STATUS_OPTIONS: Option<FilterCourseStatus>[] = [
   {text: 'Course status', value: FILTER_COURSE_STATUS.EMPTY},
   {text: 'Draft', value: FILTER_COURSE_STATUS.DRAFT},
   {text: 'Published', value: FILTER_COURSE_STATUS.PUBLISHED}
];
