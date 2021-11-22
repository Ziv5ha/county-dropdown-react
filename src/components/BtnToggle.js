import arrow from "../styles/arrow-down.png";
import "../styles/btn.css";
export function BtnToggle(props) {
  return (
    <button
      className="BtnToggle"
      onMouseDown={() => {
        props.visibility ? props.onMouseDown(false) : props.onMouseDown(true);
      }}
    >
      <img src={arrow} alt="down" />
    </button>
  );
}
