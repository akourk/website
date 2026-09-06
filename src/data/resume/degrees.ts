/** A completed degree, shown in the education section. */
export interface Degree {
  school: string;
  degree: string;
  link: string;
  /** Year conferred. */
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Bellevue College',
    degree: 'B.S. Computer Science',
    link: 'https://www.bellevuecollege.edu/',
    year: 2020,
  },
  {
    school: 'Evergreen State College',
    degree: 'B.A. Philosophy',
    link: 'https://www.evergreen.edu/',
    year: 2014,
  },
];

export default degrees;
