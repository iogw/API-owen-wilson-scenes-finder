import PropTypes from 'prop-types';

const FilterByMovie = ({ srchMovieVal, handleSrchMovieInput }) => {
  const onChangeMovieInput = (e) => handleSrchMovieInput(e.currentTarget.value);
  return (
    <>
      <label htmlFor="searchMovie">Busca por peli: </label>
      <input
        type="text"
        name="searchMovie"
        id="searchMovie"
        value={srchMovieVal}
        onChange={onChangeMovieInput}
      />
    </>
  );
};

FilterByMovie.propTypes = {
  srchMovieVal: PropTypes.string,
  handleSrchMovieInput: PropTypes.func,
};

export default FilterByMovie;
