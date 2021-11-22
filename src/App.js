import { useState, useRef, useEffect } from "react";
import { BtnClear } from "./components/BtnClear";
import { BtnToggle } from "./components/BtnToggle";
import { OptionsDropdown } from "./components/OptionsDropdown";
import { SearchBar } from "./components/SearchBar";
import "./styles/app.css";

function App() {
  const [query, setQuery] = useState("");
  const [OptionsVisibility, setOptionsVisibility] = useState("none");
  const dropDownElementRef = useRef(null);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    if (visibility) {
      dropDownElementRef.current.style.visibility = "visible";
    } else {
      dropDownElementRef.current.style.visibility = "hidden";
    }
  }, [visibility]);

  return (
    <div className="App">
      <div className="search">
        <SearchBar
          setQuery={setQuery}
          setOptionsVisibility={setOptionsVisibility}
          text={query}
          onBlur={() => setVisibility(false)}
          onFocus={() => setVisibility(true)}
        />
        <BtnClear setQuery={() => setQuery("")} />
        <BtnToggle onMouseDown={setVisibility} visibility={visibility} />
      </div>
      <OptionsDropdown
        query={query}
        refTest={dropDownElementRef}
        OptionsVisibility={OptionsVisibility}
        setQuery={setQuery}
      />
    </div>
  );
}

export default App;
