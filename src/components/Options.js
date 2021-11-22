import "../styles/option.css";
export function Options(props) {
  return (
    <option
      value={props.name}
      onMouseDown={() => {
        props.setQuery(props.name);
      }}
    >
      {props.code} - {props.name}
    </option>
  );
}
