import x from "../styles/x.png";
export function BtnClear(props) {
  return (
    <button className="BtnClear" onClick={props.setQuery}>
      <img src={x} alt="x" />
    </button>
  );
}
