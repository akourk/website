import dayjs from 'dayjs';
import { Link } from 'react-router';

import assetUrl from '../../utils/assetUrl';
import type { Project } from '../../data/projects';

interface CellProps {
  data: Project;
}

const Cell = ({ data }: CellProps) => (
  <li className="project">
    <article>
      <h2 className="project__title">
        {data.link ? <a href={data.link}>{data.title}</a> : data.title}
      </h2>
      <p className="project__subtitle">{data.subtitle}</p>
      <time className="project__date" dateTime={data.date}>
        {dayjs(data.date).format('MMMM YYYY')}
      </time>
      {/* Not every project has a screenshot worth showing; a card without one
          is a text card rather than an empty frame. */}
      {data.image && (
        <div className="project__image">
          <img src={assetUrl(data.image)} alt="" loading="lazy" />
        </div>
      )}
      <p className="project__description">{data.desc}</p>
      <ul className="project__technologies" aria-label={`Technologies used in ${data.title}`}>
        {data.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
      {(data.caseStudy ?? data.source ?? data.link) && (
        <p className="project__links">
          {data.caseStudy && (
            <Link className="button button--quiet" to={data.caseStudy}>
              Read case study{' '}
              <span className="screen-reader-only">for {data.title}</span>
            </Link>
          )}
          {data.link && (
            <a className={data.caseStudy ? undefined : 'button button--quiet'} href={data.link}>
              {data.linkLabel ?? 'View demo'}{' '}
              <span className="screen-reader-only">for {data.title}</span>
            </a>
          )}
          {data.source && (
            <a href={data.source}>
              Source{' '}
              <span className="screen-reader-only">for {data.title}</span>
            </a>
          )}
        </p>
      )}
    </article>
  </li>
);

export default Cell;
