import PropTypes from "prop-types";

import { Button } from "../../UI/Button";

export const ExpenseForm = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <Button type="submit" text="submit" customClasses="cta" />
    </form>
  );
};

ExpenseForm.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};
