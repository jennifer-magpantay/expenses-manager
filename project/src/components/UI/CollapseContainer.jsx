import PropTypes from "prop-types";

import { Plus, X } from "@phosphor-icons/react";

import { Button } from "./Button";

export const CollapseContainer = ({ children, isOpened, setIsOpened }) => {
  const handleManageheader = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className="collapse" aria-expanded={isOpened}>
      <div className="collapse--header">
        {isOpened ? (
          <p className="message-form">Click on button to close expenses form</p>
        ) : (
          <p className="message-form">CLick on button to open expense form</p>
        )}
        {isOpened ? (
          <Button
            id="close"
            type="button"
            text="Close"
            customClasses="outline align-right "
            icon={<X size={16} weight="bold" color="#3479e5" />}
            onClick={() => handleManageheader()}
          />
        ) : (
          <Button
            id="add"
            type="button"
            text="Add expense"
            customClasses="outline align-right"
            icon={<Plus size={16} weight="bold" color="#3479e5" />}
            onClick={() => handleManageheader()}
          />
        )}
      </div>

      {isOpened && <div className="collapse--body">{children}</div>}
    </div>
  );
};

CollapseContainer.propTypes = {
  children: PropTypes.node,
  isOpened: PropTypes.bool,
  setIsOpened: PropTypes.func,
};
