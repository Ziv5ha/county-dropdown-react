export function SearchBar(props) {
  return (
    <input
      type="text"
      className="SearchBar"
      onChange={({ target }) => {
        console.log(target.value);
        props.setQuery(target.value);
      }}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      value={props.text}
      label="Choose a country"
    />
  );
}
