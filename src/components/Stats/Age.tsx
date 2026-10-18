import { useEffect, useState, useSyncExternalStore } from 'react';

import ageAt from '../../utils/age';
import { createTickingStore, useTickingValue } from '../../utils/tickingStore';

const ageStore = createTickingStore(() => ageAt(new Date()).years, 60 * 60 * 1000);
const reducedMotionQuery = '(prefers-reduced-motion: reduce)';
const subscribeToMotionPreference = (onChange: () => void) => {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener('change', onChange);
  return () => { query.removeEventListener('change', onChange); };
};
const prefersReducedMotion = () => window.matchMedia(reducedMotionQuery).matches;
const serverMotionPreference = () => false;

const Age = () => {
  const age = useTickingValue(ageStore);
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [detail, setDetail] = useState<ReturnType<typeof ageAt> | null>(null);
  const active = hovered || pinned;
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    prefersReducedMotion,
    serverMotionPreference,
  );

  useEffect(() => {
    if (!active) return undefined;

    const update = () => { setDetail(ageAt(new Date())); };
    update();
    // Keep the extra precision still for visitors who request less motion.
    if (reducedMotion) return undefined;

    const timer = setInterval(update, 250);
    return () => { clearInterval(timer); };
  }, [active, reducedMotion]);

  const years = active && detail ? detail.years : age;

  return (
    <button
      type="button"
      className={`age-detail${active ? ' age-detail--active' : ''}`}
      aria-label={`${years ?? 'Current age'}${years === undefined ? '' : ' years old'}. Toggle decimal display.`}
      aria-expanded={active}
      title="Hover or activate to see approximate age, based on my birthday."
      onPointerEnter={(event) => {
        if (event.pointerType !== 'touch') setHovered(true);
      }}
      onPointerLeave={() => { setHovered(false); }}
      onClick={() => { setPinned((value) => !value); }}
      onBlur={() => { setPinned(false); }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setHovered(false);
          setPinned(false);
        }
      }}
    >
      {/* The ticking digits are a visual detail, not a live announcement. */}
      <span aria-hidden="true">{years ?? '—'}</span>
      <span className="age-detail__decimals" aria-hidden="true">
        .{detail?.decimals ?? '00000000'}
      </span>
    </button>
  );
};

export default Age;
