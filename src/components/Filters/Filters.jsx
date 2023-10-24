import PropTypes from 'prop-types';
import Button from '../Button';
import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';
import SortByMovie from './SortByMovie';
import SortByYear from './SortByYear';

import '../../styles/components/filters/Filters.scss';

const Filters = ({
  srchMovieVal,
  handleSrchMovieInput,
  yearsList,
  srchYearVal,
  handleSrchYearSelect,
  handleRstBtn,
  totalFilteredList,
  handleSortScenesList,
  sortAtoZ,
  sortZtoA,
  sortOldToNew,
  sortNewToOld,
}) => {
  return (
    <div className="filters">
      <form className="filters__form" onSubmit={(e) => e.preventDefault()}>
        <section className="filters__form-inputs">
          <FilterByMovie
            srchMovieVal={srchMovieVal}
            handleSrchMovieInput={handleSrchMovieInput}
          />
          <FilterByYear
            yearsList={yearsList}
            srchYearVal={srchYearVal}
            handleSrchYearSelect={handleSrchYearSelect}
          />
          <Button
            text="Limpiar búsqueda"
            btnClass="filters__rst-btn"
            hndlFunc={handleRstBtn}
          />
        </section>

        <section className="filters__form-sorters">
          <p className="filters__total">
            Número de resultados: {totalFilteredList}
          </p>
          <section className="filters__form-sorters">
            <SortByMovie
              handleSortScenesList={handleSortScenesList}
              sortAtoZ={sortAtoZ}
              sortZtoA={sortZtoA}
            />
            <SortByYear
              handleSortScenesList={handleSortScenesList}
              sortOldToNew={sortOldToNew}
              sortNewToOld={sortNewToOld}
            />
          </section>
        </section>
      </form>
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
  handleSortScenesList: PropTypes.func,
  sortAtoZ: PropTypes.bool,
  sortZtoA: PropTypes.bool,
  sortOldToNew: PropTypes.bool,
  sortNewToOld: PropTypes.bool,
};

export default Filters;
