import PropTypes from 'prop-types';
import '../../../styles/components/Filter.scss';

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
    <div className="filter-year">
      <label className="filter-year__label" htmlFor="searchYear">
        ¿De qué año?{' '}
      </label>
      <select
        className="filter-year__select"
        name="searchYear"
        id="searchYear"
        value={srchYearVal}
        onChange={onChangeYearSelect}
      >
        <option value="all">Todos</option>
        {renderSrchYearOptions()}
      </select>
    </div>
  );
};

FilterByYear.propTypes = {
  yearsList: PropTypes.array,
  srchYearVal: PropTypes.string,
  handleSrchYearSelect: PropTypes.func,
};

export default FilterByYear;
