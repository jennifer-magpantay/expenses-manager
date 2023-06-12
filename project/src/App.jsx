import { useState } from "react";

import { Header } from "./components/UI/Header";
import { Main } from "./components/UI/Main";
import { Section } from "./components/UI/Section";
import { ExpenseForm } from "./components/Expenses/Form/ExpenseForm";
import { CollapseContainer } from "./components/UI/CollapseContainer";
import { ExpenseList } from "./components/Expenses/List/ExpenseList";
import { Footer } from "./components/UI/Footer";

const list = [
  {
    id: "1",
    title: "Shopping",
    category: "Grocery",
    amount: 49.9,
    createdAt: new Date(),
  },
];

export const App = () => {
  const [expenses, setExpenses] = useState(list);
  const [isOpened, setIsOpened] = useState(false);

  const saveExpensesValues = (savedExpensesData) => {
    const expenseData = {
      ...savedExpensesData,
      id: String(new Date().getTime()),
      createdAt: new Date(),
    };
    setExpenses((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
    setIsOpened(false);
  };

  const handleDeleteListItem = (event) => {
    const currentTarget = event.currentTarget;
    const filteredList = expenses.filter(
      (expense) => expense.id !== currentTarget.id
    );
    setExpenses(filteredList);
  };
  return (
    <>
      <Header />
      <Main>
        <Section id="hero" title="Manage your expenses">
          <CollapseContainer isOpened={isOpened} setIsOpened={setIsOpened}>
            <ExpenseForm onSavedValues={saveExpensesValues} />
          </CollapseContainer>
        </Section>
        <Section id="graph" title="Graph">
          <p>graph about the expenses</p>
        </Section>
        <Section id="historic" title="Historic of expenses">
          <p>List of the expenses</p>
          <ExpenseList
            list={expenses}
            onClick={(event) => handleDeleteListItem(event)}
          />
        </Section>
      </Main>
      <Footer />
    </>
  );
};
