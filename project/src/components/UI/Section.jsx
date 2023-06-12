import PropTypes from "prop-types";

export const Section = ({
  customClasses,
  id,
  title,
  description,
  children,
}) => {
  const _customClasses = ["section", customClasses].join(" ");
  return (
    <section className={_customClasses} id={id}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </section>
  );
};

Section.propTypes = {
  customClasses: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};
