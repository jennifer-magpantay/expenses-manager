import { useState } from "react";

import { Header } from "./components/UI/Header";
import { Main } from "./components/UI/Main";
import { NewExpenses } from "./components/NewExpenses/NewExpenses";
import { Expenses } from "./components/Expenses/Expenses";
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

/** TODO:
 * - set graphs
 */

export const App = () => {
  const [expenses, setExpenses] = useState(list);

  const saveExpensesValues = (savedExpensesData) => {
    const expenseData = {
      ...savedExpensesData,
      id: String(new Date().getTime()),
      createdAt: new Date(),
    };
    setExpenses((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
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
        <NewExpenses onSavedValues={saveExpensesValues} />
        <Expenses
          expenses={expenses}
          onClick={(event) => handleDeleteListItem(event)}
        />
      </Main>
      <Footer />
    </>
  );
};
