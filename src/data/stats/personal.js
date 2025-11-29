import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1990-03-15T22:55:00');
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

const DuolingoStreak = () => {
  const [days, setDays] = useState();

  const calculateDays = () => {
    const startDate = new Date('2023-06-25');
    const now = new Date();
    const diffTime = Math.abs(now - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setDays(diffDays);
  };

  useEffect(() => {
    calculateDays();
    const timer = setInterval(() => calculateDays(), 1000 * 60 * 60); // Update every hour
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{days} days</>;
};

// Removed GitHub commits stat due to API limitations

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 'USA, Canada, Japan, Australia, Iceland, Greece',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Seattle, WA',
  },
  {
    key: 'duolingo',
    label: 'Duolingo streak',
    value: <DuolingoStreak />,
    link: 'https://www.duolingo.com/',
  },
];

export default data;
