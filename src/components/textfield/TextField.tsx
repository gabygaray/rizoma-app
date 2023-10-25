import "./styles.css";

export const TextField = ({
  label,
  value = "",
  disabled = false,
}: {
  label: string;
  value?: string;
  disabled?: boolean;
}) => {
  return (
    <div className="form__group field">
      <input
        type="input"
        className="form__field"
        placeholder="Name"
        required
        value={value}
        disabled={disabled}
      />
      <label className="form__label">{label}</label>
    </div>
  );
};
