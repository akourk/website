import dayjs from 'dayjs';

import assetUrl from '../../utils/assetUrl';
import type { Project } from '../../data/projects';

interface CellProps {
  data: Project;
}

const Cell = ({ data }: CellProps) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link} className="image">
        <img src={assetUrl(data.image)} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

export default Cell;
