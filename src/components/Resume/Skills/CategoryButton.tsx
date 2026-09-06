interface CategoryButtonProps {
  label: string;
  handleClick: (label: string) => void;
  /** Which filter buttons are on, keyed by label. Exactly one is true. */
  active: Record<string, boolean>;
}

const CategoryButton = ({ handleClick, active, label }: CategoryButtonProps) => (
  <button
    className="skill-filter"
    type="button"
    // The active button is styled differently but is otherwise indistinguishable
    // to a screen reader, and colour alone cannot carry the selected state.
    aria-pressed={active[label]}
    onClick={() => handleClick(label)}
  >
    {label}
  </button>
);

export default CategoryButton;
