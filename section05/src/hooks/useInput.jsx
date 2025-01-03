import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
    console.log("onChange", e.target.value);
  };

  return [input, onChange];
}

export default useInput;
