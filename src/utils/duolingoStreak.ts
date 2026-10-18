const DAY_MS = 24 * 60 * 60 * 1000;
const BASE_STREAK = 1187;
const BASE_DATE = Date.UTC(2026, 9, 17);
const calendar = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Los_Angeles',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
});

/** Estimate from Alex's October 17, 2026 update, assuming no missed days. */
const duolingoStreak = (now: Date): number => {
  const parts = calendar.formatToParts(now);
  const part = (type: Intl.DateTimeFormatPartTypes) => Number(
    parts.find((value) => value.type === type)?.value,
  );
  // Compare calendar days, so DST and a visitor's timezone cannot move the
  // counter early or late. This is a local estimate, not a Duolingo API feed.
  const today = Date.UTC(part('year'), part('month') - 1, part('day'));
  return BASE_STREAK + Math.max(0, Math.round((today - BASE_DATE) / DAY_MS));
};

export default duolingoStreak;
