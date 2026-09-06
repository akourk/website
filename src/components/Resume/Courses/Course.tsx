import type { Course as CourseData } from '../../../data/resume/courses';

interface CourseProps {
  data: CourseData;
}

const Course = ({ data }: CourseProps) => (
  <li>
    <a className="course" href={data.link}>
      <span className="course__number">{data.number}</span>
      <span className="course__name">{data.title.trim()}</span>
    </a>
  </li>
);

export default Course;
