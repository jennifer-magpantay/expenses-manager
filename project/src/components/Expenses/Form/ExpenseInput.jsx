import { useState } from "react";
import PropTypes from "prop-types";

export const ExpenseInput = ({ label, id, type, placeholder }) => {
  const [state, setState] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setState(value);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        value={state}
        placeholder={placeholder}
        required
        onChange={(event) => handleInputChange(event)}
      />
    </>
  );
};

ExpenseInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf[("text", "date")],
  id: PropTypes.string,
  placeholder: PropTypes.string,
};
