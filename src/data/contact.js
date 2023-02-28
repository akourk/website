// import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
// import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const faGithub = require('@fortawesome/free-brands-svg-icons/faGithub').definition;
const faFacebookF = require('@fortawesome/free-brands-svg-icons/faFacebookF').definition;
const faInstagram = require('@fortawesome/free-brands-svg-icons/faInstagram').definition;
const faLinkedinIn = require('@fortawesome/free-brands-svg-icons/faLinkedinIn').definition;
const faEnvelope = require('@fortawesome/free-regular-svg-icons/faEnvelope').definition;

const data = [
  {
    link: 'https://github.com/akourk',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://facebook.com/shtufffy',
    label: 'Facebook',
    icon: faFacebookF,
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
