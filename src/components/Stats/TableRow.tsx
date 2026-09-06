import type { ReactNode } from 'react';

interface TableRowProps {
  label: string;
  value?: ReactNode;
  link?: string;
  format?: (value: ReactNode) => ReactNode;
}

const TableRow = ({
  label, link, value = null, format = (x) => x,
}: TableRowProps) => (
  <tr>
    {/*
      The label names its row, so it is a row header rather than a plain cell.
      Without scope="row" a screen reader reads the value with no idea what it
      is a value of.
    */}
    <th scope="row" className="stat-label">{label}</th>
    <td>{link ? <a href={link}>{format(value)}</a> : format(value)}</td>
  </tr>
);

export default TableRow;
