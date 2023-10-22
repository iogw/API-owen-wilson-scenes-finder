import PropTypes from 'prop-types';

const FilterByYear = ({ yearsList, srchYearVal, handleSrchYearSelect }) => {
  const renderSrchYearOptions = () => {
    return yearsList.map((year) => {
      return (
        <option key={year} value={year}>
          {year}
        </option>
      );
    });
  };
  const onChangeYearSelect = (e) => handleSrchYearSelect(e.target.value);
  return (
    <>
      <label htmlFor="searchYear">Selecciona un año: </label>
      <select
        name="searchYear"
        id="searchYear"
        value={srchYearVal}
        onChange={onChangeYearSelect}
      >
        <option value="all">Todos</option>
        {renderSrchYearOptions()}
      </select>
    </>
  );
};

FilterByYear.propTypes = {
  yearsList: PropTypes.array,
  srchYearVal: PropTypes.string,
  handleSrchYearSelect: PropTypes.func,
};

export default FilterByYear;
