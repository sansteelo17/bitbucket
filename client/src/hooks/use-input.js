import { useState } from "react";

const useInput = () => {
  const [enteredValue, setEnteredValue] = useState("");

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  return {
    enteredValue,
    valueChangeHandler,
  };
};

export default useInput;
