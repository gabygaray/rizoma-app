import "./styles.css";

export const Input = ({ label, width }: { label: string; width?: string }) => {
  return (
    <div className="input-group" style={{ width: width }}>
      <input
        required
        type="text"
        name="text"
        autoComplete="off"
        className="input"
      />
      <label className="user-label">{label}</label>
    </div>
  );
};
