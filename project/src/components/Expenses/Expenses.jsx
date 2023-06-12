import { useState } from "react";
import PropTypes from "prop-types";

import { Section } from "../UI/Section";
import { ExpenseFilter } from "./Filter/ExpenseFilter";
import { ExpenseList } from "./List/ExpenseList";

export const Expenses = ({ expenses, onClick }) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleFilterChange = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = expenses?.filter((expense) => {
    return expense?.createdAt?.getFullYear() === selectedYear;
  });
  return (
    <>
      <Section id="filter" title="Filter">
        <ExpenseFilter
          selectValue={selectedYear}
          onSelectChange={handleFilterChange}
        />
      </Section>

      <Section id="graph" title="Graph">
        <p>graph about the expenses</p>
      </Section>

      <Section id="historic" title="Historic of expenses">
        <ExpenseList list={filteredExpenses} onClick={onClick} />
      </Section>
    </>
  );
};

Expenses.propTypes = {
  expenses: PropTypes.array,
  onClick: PropTypes.func,
};
