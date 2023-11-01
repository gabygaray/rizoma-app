import "./styles.css";

export const Switch = ({
  checked,
  onClick,
}: {
  onClick?: () => void;
  checked: boolean;
}) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onClick={onClick} />
      <div className="slider">
        <div className="circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            enableBackground="new 0 0 512 512"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.707 19.121a.997.997 0 01-1.414 0l-5.646-5.647a1.5 1.5 0 010-2.121l.707-.707a1.5 1.5 0 012.121 0L9 14.171l9.525-9.525a1.5 1.5 0 012.121 0l.707.707a1.5 1.5 0 010 2.121z"
              data-original="#000000"
            ></path>
          </svg>
        </div>
      </div>
    </label>
  );
};
