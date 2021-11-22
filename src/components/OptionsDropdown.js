import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import countries from "../data/countries.json";
import "../styles/options.css";
import { Options } from "./Options";
export function OptionsDropdown(props) {
  const [filtered, setFiltered] = useState(countries);
  useEffect(() => {
    if (props.query) {
      console.log(props.query);
      setFiltered(
        countries.filter((country) =>
          country.name.toLowerCase().startsWith(props.query.toLowerCase())
        )
      );
    } else {
      setFiltered(countries);
    }
  }, [props.query]);

  const countriesOptions = filtered.map(({ name, code }) => {
    return (
      <Options name={name} code={code} key={code} setQuery={props.setQuery} />
    );
  });
  return (
    <div className="dropdown" ref={props.refTest}>
      {countriesOptions}
    </div>
  );
}
