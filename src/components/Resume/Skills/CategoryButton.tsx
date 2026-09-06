
interface CategoryButtonProps {
  label: string;
  handleClick: (label: string) => void;
  /** Which filter buttons are on, keyed by label. Exactly one is true. */
  active: Record<string, boolean>;
}

const CategoryButton = ({ handleClick, active, label }: CategoryButtonProps) => (
  <button
    className={`skillbutton ${active[label] ? 'skillbutton-active' : ''}`}
    type="button"
    onClick={() => handleClick(label)}
  >
    {label}
  </button>
);

export default CategoryButton;
