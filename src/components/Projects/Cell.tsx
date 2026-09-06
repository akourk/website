import dayjs from 'dayjs';

import assetUrl from '../../utils/assetUrl';
import type { Project } from '../../data/projects';

interface CellProps {
  data: Project;
}

const Cell = ({ data }: CellProps) => (
  <li className="project">
    <article>
      <h3 className="project__title">
        {data.link ? <a href={data.link}>{data.title}</a> : data.title}
      </h3>
      <time className="project__date" dateTime={data.date}>
        {dayjs(data.date).format('MMMM YYYY')}
      </time>
      <div className="project__image">
        <img src={assetUrl(data.image)} alt="" />
      </div>
      <p className="project__description">{data.desc}</p>
    </article>
  </li>
);

export default Cell;
