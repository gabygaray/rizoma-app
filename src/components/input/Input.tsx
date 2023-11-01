import "./styles.css";

export const Input = ({
  label,
  width,
  type,
  name,
  value,
  onChange,
}: {
  label: string;
  width?: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="input-group" style={{ width: width }}>
      <input
        required
        type={type || "text"}
        name={name || "text"}
        autoComplete="off"
        className="input"
        onChange={(e) => onChange(e)}
        value={value}
      />
      <label className="user-label">{label}</label>
    </div>
  );
};
