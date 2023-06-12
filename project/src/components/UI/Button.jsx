import PropTypes from "prop-types";

export const Button = ({ id, type, text, customClasses, icon, onClick }) => {
  const _customClasses = ["button", customClasses].join(" ");
  return (
    <>
      {customClasses.includes("icon") ? (
        <button
          id={id}
          className={_customClasses}
          type={type}
          onClick={onClick}
        >
          <span className="sr-only">{text}</span>
          {icon}
        </button>
      ) : (
        <button
          id={id}
          className={_customClasses}
          type={type}
          onClick={onClick}
        >
          {text}
          {icon && icon}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]),
  text: PropTypes.string,
  customClasses: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};
