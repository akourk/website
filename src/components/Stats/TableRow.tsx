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
    <td width="70%">{label}</td>
    <td>{link ? <a href={link}>{format(value)}</a> : format(value)}</td>
  </tr>
);

export default TableRow;
