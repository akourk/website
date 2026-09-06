import Course from './Courses/Course';
import type { Course as CourseData } from '../../data/resume/courses';

interface CoursesProps {
  data?: CourseData[];
}

const sortCourses = (courses: CourseData[]) => [...courses].sort((a, b) => {
  let ret = 0;
  if (a.university > b.university) ret = -1;
  else if (a.university < b.university) ret = 1;
  else if (a.number > b.number) ret = 1;
  else if (a.number < b.number) ret = -1;
  return ret;
});

const Courses = ({ data = [] }: CoursesProps) => (
  <section className="section" aria-labelledby="courses-title">
    <details className="resume__courses section-anchor" id="courses">
      <summary><h2 className="section__title" id="courses-title">Selected Courses</h2></summary>
      <ul className="course-list">
        {sortCourses(data).map((course) => (
          <Course data={course} key={course.title} />
        ))}
      </ul>
    </details>
  </section>
);

export default Courses;
