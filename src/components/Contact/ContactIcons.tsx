import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

interface ContactIconsProps {
  className?: string;
  showLabels?: boolean;
}

const ContactIcons = ({ className = '', showLabels = false }: ContactIconsProps) => (
  <ul className={`social ${className}`.trim()}>
    {data.map((s) => (
      <li key={s.label}>
        {/*
          FontAwesome renders its svg aria-hidden, so without a label these links
          have no accessible name at all and a screen reader announces "link".
          The label is already in the data for exactly this.
        */}
        <a href={s.link} aria-label={s.label}>
          <FontAwesomeIcon icon={s.icon} />
          {showLabels && <span>{s.label}</span>}
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
