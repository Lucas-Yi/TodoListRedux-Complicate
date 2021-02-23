import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { connect } from "react-redux";

const Input = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    const trimmedText = input.trim();
    if (e.which === 13 && trimmedText) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      value={input}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default connect(null, { addTodo })(Input);
