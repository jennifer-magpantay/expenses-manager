import PropTypes from "prop-types";

export const ExpenseFilter = ({ selectValue, onSelectChange }) => {
  const setYearRange = (startYear) => {
    const currentYear = new Date().getFullYear();
    let years = [];
    startYear = startYear || 1980;
    while (startYear <= currentYear) {
      years = [...years, startYear++];
    }
    return years;
  };
  const years = setYearRange(2020);

  const handleSelectChange = (event) => {
    const { value } = event.target;
    onSelectChange(Number(value));
  };

  return (
    <div className="filter">
      <label htmlFor="years">Choose a year</label>
      <div className="select" tabIndex={0}>
        <select
          value={selectValue}
          name="years"
          id="years"
          onChange={(event) => handleSelectChange(event)}
        >
          {years
            .map((year) => (
              <option value={String(year)} key={year}>
                {year}
              </option>
            ))
            .reverse()}
        </select>
      </div>
    </div>
  );
};

ExpenseFilter.propTypes = {
  selectValue: PropTypes.number,
  onSelectChange: PropTypes.func,
};
