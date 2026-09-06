
import type { Course as CourseData } from '../../../data/resume/courses';

interface CourseProps {
  data: CourseData;
  /** The last course in the list drops the trailing separator dot. */
  last?: boolean;
}

const Course = ({ data, last = false }: CourseProps) => (
  <li className="course-container">
    <a href={data.link}>
      <h4 className="course-number">{data.number}:</h4>
      <p className="course-name">{data.title}</p>
    </a>
    {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
  </li>
);

export default Course;
