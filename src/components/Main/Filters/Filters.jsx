import PropTypes from 'prop-types';
import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';

const Filters = ({
  srchMovieVal,
  handleSrchMovieInput,
  yearsList,
  srchYearVal,
  handleSrchYearSelect,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <FilterByMovie
        srchMovieVal={srchMovieVal}
        handleSrchMovieInput={handleSrchMovieInput}
      />
      <FilterByYear
        yearsList={yearsList}
        srchYearVal={srchYearVal}
        handleSrchYearSelect={handleSrchYearSelect}
      />
    </form>
  );
};

Filters.propTypes = {
  srchMovieVal: PropTypes.string,
  handleSrchMovieInput: PropTypes.func,
  yearsList: PropTypes.array,
  srchYearVal: PropTypes.string,
  handleSrchYearSelect: PropTypes.func,
};

export default Filters;
