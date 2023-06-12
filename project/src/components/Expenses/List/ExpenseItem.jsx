import PropTypes from "prop-types";
import { X } from "@phosphor-icons/react";

import { Button } from "../../UI/Button";

import { formatAmount } from "../../../helpers/formatters";
export const ExpenseItem = ({ date, id, title, category, amount, onClick }) => {
  const month = date?.toLocaleString("en-GB", { month: "long" });
  const day = date?.toLocaleString("en-GB", { day: "2-digit" });

  return (
    <div className="card">
      <div className="card--aside">
        <span className="card--aside-date">{month}</span>
        <span className="card--aside-date">{day}</span>
      </div>
      <div className="card--body">
        <p className="card--body-title">{title}</p>
        <p className="card--body-category">{category}</p>
      </div>
      <div className="card--aside">
        <span className="card--aside-value">{formatAmount(amount)}</span>
      </div>
      <Button
        id={id}
        customClasses="icon"
        text="Delete expense"
        icon={<X size={24} weight="bold" />}
        onClick={onClick}
      />
    </div>
  );
};

ExpenseItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  amount: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  onClick: PropTypes.func,
};
