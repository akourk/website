import TableRow from './TableRow';
import type { Stat } from '../../data/stats/personal';

interface TableProps {
  data: Stat[];
  /** Names the table for screen readers. Visually hidden. */
  caption: string;
}

const Table = ({ data, caption }: TableProps) => (
  <table className="stats-table">
    <caption className="screen-reader-only">{caption}</caption>
    <tbody>
      {data.map((pair) => (
        <TableRow
          format={pair.format}
          key={pair.label}
          label={pair.label}
          link={pair.link}
          value={pair.value}
        />
      ))}
    </tbody>
  </table>
);

export default Table;
