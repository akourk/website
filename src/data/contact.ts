import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

/** One icon link in the sidebar footer and on the contact page. */
export interface ContactLink {
  /** Absolute URL, or a mailto: address. */
  link: string;
  /** Accessible name for the link. */
  label: string;
  icon: IconDefinition;
}

const data: ContactLink[] = [
  {
    link: 'https://github.com/akourk',
    label: 'GitHub',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/akourk/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/akourk',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:akourk@icloud.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
