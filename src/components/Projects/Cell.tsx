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
      {/* Not every project has a screenshot worth showing; a card without one
          is a text card rather than an empty frame. */}
      {data.image && (
        <div className="project__image">
          <img src={assetUrl(data.image)} alt="" />
        </div>
      )}
      <p className="project__description">{data.desc}</p>
      {data.source && (
        <p className="project__links">
          {/*
            Several cards carry a link reading "Source", so the visible text
            alone would not tell them apart out of context. The suffix is not
            on screen but is part of the link's accessible name.
          */}
          <a href={data.source}>
            Source
            <span className="screen-reader-only"> for {data.title}</span>
          </a>
        </p>
      )}
    </article>
  </li>
);

export default Cell;
