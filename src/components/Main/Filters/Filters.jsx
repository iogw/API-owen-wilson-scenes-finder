import PropTypes from 'prop-types';
import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';

import '../../../styles/components/Filters.scss';

const Filters = ({
  srchMovieVal,
  handleSrchMovieInput,
  yearsList,
  srchYearVal,
  handleSrchYearSelect,
  handleRstBtn,
}) => {
  return (
    <form className="filters" onSubmit={(e) => e.preventDefault()}>
      <FilterByMovie
        srchMovieVal={srchMovieVal}
        handleSrchMovieInput={handleSrchMovieInput}
      />
      <FilterByYear
        yearsList={yearsList}
        srchYearVal={srchYearVal}
        handleSrchYearSelect={handleSrchYearSelect}
      />
      <button className="reset-button" onClick={handleRstBtn}>
        Limpiar búsqueda
      </button>
    </form>
  );
};

Filters.propTypes = {
  srchMovieVal: PropTypes.string,
  handleSrchMovieInput: PropTypes.func,
  yearsList: PropTypes.array,
  srchYearVal: PropTypes.string,
  handleSrchYearSelect: PropTypes.func,
  handleRstBtn: PropTypes.func,
};

export default Filters;
