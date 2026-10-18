/**
 * Approximate age from a birthday, using local calendar years. The fraction is
 * the part of the current birthday-to-birthday year that has elapsed; it does
 * not imply that the time of birth is known.
 */
const ageAt = (date: Date) => {
  let birthdayYear = date.getFullYear();
  if (date < new Date(birthdayYear, 2, 15)) birthdayYear -= 1;

  const lastBirthday = new Date(birthdayYear, 2, 15).getTime();
  const nextBirthday = new Date(birthdayYear + 1, 2, 15).getTime();
  const fraction = (date.getTime() - lastBirthday) / (nextBirthday - lastBirthday);

  return {
    years: birthdayYear - 1990,
    // Truncation prevents rounding up to the next age just before a birthday.
    decimals: Math.floor(fraction * 100_000_000).toString().padStart(8, '0'),
  };
};

export default ageAt;
