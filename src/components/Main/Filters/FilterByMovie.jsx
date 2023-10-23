import PropTypes from 'prop-types';
import '../../../styles/components/Filter.scss';

const FilterByMovie = ({ srchMovieVal, handleSrchMovieInput }) => {
  const onChangeMovieInput = (e) => handleSrchMovieInput(e.currentTarget.value);
  return (
    <div className="filter-movie">
      <label className="filter-movie__label" htmlFor="searchMovie">
        Busca por peli:{' '}
      </label>
      <input
        className="filter-movie__input"
        type="text"
        name="searchMovie"
        id="searchMovie"
        value={srchMovieVal}
        onChange={onChangeMovieInput}
      />
    </div>
  );
};

FilterByMovie.propTypes = {
  srchMovieVal: PropTypes.string,
  handleSrchMovieInput: PropTypes.func,
};

export default FilterByMovie;
