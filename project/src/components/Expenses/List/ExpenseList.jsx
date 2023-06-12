import PropTypes from "prop-types";

import { ExpenseItem } from "./ExpenseItem";

export const ExpenseList = ({ list, onClick }) => {
  if (list.length === 0) {
    return <p>No expenses found for the current year</p>;
  }
  return (
    <>
      <ul className="expenses--container">
        {list.map(({ id, title, category, createdAt, amount }) => (
          <li key={id}>
            <ExpenseItem
              id={id}
              title={title}
              category={category}
              date={createdAt}
              amount={String(amount)}
              onClick={onClick}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

ExpenseList.propTypes = {
  list: PropTypes.array,
  onClick: PropTypes.func,
};
