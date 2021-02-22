import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1990-03-15T03:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 2,
    link:
      'https://www.google.com/maps/place/North+Pacific+Ocean/@28.2154471,-172.4085114,4z/data=!3m1!4b1!4m5!3m4!1s0x32d44045aa3394d1:0xe8fd2fa6b02e4120!8m2!3d32.694866!4d-162.070312',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Seattle, WA',
  },
];

export default data;
