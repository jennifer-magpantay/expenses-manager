import { useRef } from "react";
import PropTypes from "prop-types";

import { Button } from "../../UI/Button";
import { ExpenseInput } from "./ExpenseInput";

export const ExpenseForm = ({ onSavedValues }) => {
  const formRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // get elements
    const form = formRef.current;
    const elements = form.elements;
    // filter inputs
    const inputs = Array.from(elements).filter(
      (element) => element.tagName.toLowerCase() === "input"
    );
    let userInput = {};
    // get input values to save into userInput
    Array.from(inputs).forEach((element) => {
      return (userInput = { ...userInput, [element.id]: element.value });
    });
    // then, save it and reset form
    onSavedValues(userInput);
    Array.from(inputs).forEach((element) => {
      element.value = "";
    });
  };

  return (
    <form onSubmit={(event) => handleFormSubmit(event)} ref={formRef}>
      <ExpenseInput
        type="text"
        label="Expense title"
        id="title"
        placeholder="Ex.: Shopping"
      />
      <ExpenseInput
        type="text"
        label="Category"
        id="categpory"
        placeholder="Ex.: grocery"
      />
      <ExpenseInput
        type="text"
        label="Amount"
        id="amount"
        placeholder="Ex.: 129,23"
      />
      <Button type="submit" text="submit" customClasses="cta" />
    </form>
  );
};

ExpenseForm.propTypes = {
  onSavedValues: PropTypes.func,
};
