import "./styles.css";

export const TextField = ({
  label,
  value,
  disabled = false,
  onChange,
  name,
}: {
  label: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}) => {
  return (
    <div className="form__group field">
      <input
        type="input"
        className="form__field"
        placeholder={label}
        required
        disabled={disabled}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        autoComplete="off"
      />
      <label className="form__label">{label}</label>
    </div>
  );
};
