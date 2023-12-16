export interface Course {
   id: number;
   name: string;
   imageUrl: string;
   status: CourseStatus;
   instructors: Instructor[];
}

export enum CourseStatus {
   DRAFT = 'DRAFT',
   PUBLISHED = 'PUBLISHED',
}

export interface Instructor {
   name: string;
   image: string;
}
