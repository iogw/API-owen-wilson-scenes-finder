import PropTypes from 'prop-types';
import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';

import '../../styles/components/filters/Filters.scss';

const Filters = ({
  srchMovieVal,
  handleSrchMovieInput,
  yearsList,
  srchYearVal,
  handleSrchYearSelect,
  handleRstBtn,
  totalFilteredList,
}) => {
  return (
    <div className='filters'>
      <form className="filters__form" onSubmit={(e) => e.preventDefault()}>
        <FilterByMovie
          srchMovieVal={srchMovieVal}
          handleSrchMovieInput={handleSrchMovieInput}
        />
        <FilterByYear
          yearsList={yearsList}
          srchYearVal={srchYearVal}
          handleSrchYearSelect={handleSrchYearSelect}
        />
        <button className="filters__rst-btn" onClick={handleRstBtn}>
          Limpiar búsqueda
        </button>
      </form>
      <p className='filters__total'>Número de resultados: {totalFilteredList}</p>
    </div>
  );
};

Filters.propTypes = {
  srchMovieVal: PropTypes.string,
  handleSrchMovieInput: PropTypes.func,
  yearsList: PropTypes.array,
  srchYearVal: PropTypes.string,
  handleSrchYearSelect: PropTypes.func,
  handleRstBtn: PropTypes.func,
  totalFilteredList: PropTypes.number,
};

export default Filters;
