import { useState } from "react";
import styles from "./Options.module.css";

const Options = () => {
  const [options, setOptions] = useState(0);

  const handleClickBtn = () => {
    setOptions(options + 1);
    console.log(setOptions, "hello");
  };

  return (
    <div>
      <button type="button" onClick={handleClickBtn}>
        Good {options}
      </button>
      <button type="button" onClick={() => console.log("hello neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => console.log("hello bad")}>
        Bad
      </button>
    </div>
  );
};

export default Options;
