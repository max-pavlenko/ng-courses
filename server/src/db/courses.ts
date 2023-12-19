import { Course, CourseStatus } from "../../../client/src/app/courses/models/course";

export const COURSES: Course[] = [
   {
      id: 0,
      imageUrl: 'https://picsum.photos/200/100',
      name: 'Fundamentals of Credit',
      status: CourseStatus.DRAFT,
      instructors: [
         { name: 'Roli Jain', image: 'https://picsum.photos/300/300' },
         { name: 'Sebastian Taylor', image: 'https://picsum.photos/300/300' },
      ],
   },
   {
      id: 1,
      imageUrl: 'https://picsum.photos/200/100',
      name: 'Accounting Fundamentals',
      status: CourseStatus.PUBLISHED,
      instructors: [{ name: 'Roli Jain', image: 'https://picsum.photos/300/300' }],
   },
];
