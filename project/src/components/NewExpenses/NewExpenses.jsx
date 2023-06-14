import { useState } from "react";
import PropTypes from "prop-types";

import { Section } from "../UI/Section";
import { CollapseContainer } from "../UI/CollapseContainer";
import { ExpenseForm } from "./Form/ExpenseForm";
import { ExpenseInput } from "./Form/ExpenseInput";

export const NewExpenses = ({ onSavedValues }) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // get elements
    const elements = event.target;
    // filter inputs
    const inputs = Array.from(elements).filter(
      (element) => element.tagName.toLowerCase() === "input"
    );
    let userInput = {};
    // get input values to save into userInput
    Array.from(inputs).forEach((element) => {
      return (userInput = { ...userInput, [element.id]: element.value });
    });
    // then, save results, reset form and close form
    onSavedValues(userInput);
    Array.from(inputs).forEach((element) => {
      element.value = "";
    });
    setIsOpened(false);
  };
  return (
    <>
      <Section id="hero" title="Manage your expenses">
        <CollapseContainer isOpened={isOpened} setIsOpened={setIsOpened}>
          <ExpenseForm onSubmit={(event) => handleFormSubmit(event)}>
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
              placeholder="Ex.: Grocery"
            />
            <ExpenseInput
              type="text"
              label="Amount"
              id="amount"
              placeholder="Ex.: 129.29"
            />
          </ExpenseForm>
        </CollapseContainer>
      </Section>
    </>
  );
};

NewExpenses.propTypes = {
  onSavedValues: PropTypes.func,
  // isOpened: PropTypes.bool,
  // setIsOpened: PropTypes.func,
};
