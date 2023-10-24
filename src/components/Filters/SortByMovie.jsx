import PropTypes from 'prop-types';
import '../../styles/components/filters/Filter.scss';

const SortByMovie = ({ handleSortScenesList, sortAtoZ, sortZtoA }) => {
  const handleClick = (e) => {
    handleSortScenesList(e.currentTarget.id);
  };
  return (
    <section className="sort-title">
      <p>Ordenar por título:</p>
      <button
        className={sortAtoZ ? 'sort-active' : ''}
        id={'AtoZ'}
        onClick={handleClick}
      >
        <i className="fa-solid fa-arrow-down-a-z sort-by"></i>
      </button>
      <button
        className={sortZtoA ? 'sort-active' : ''}
        id={'ZtoA'}
        onClick={handleClick}
      >
        <i className="fa-solid fa-arrow-up-a-z sort-by"></i>
      </button>
    </section>
  );
};

SortByMovie.propTypes = {
  handleSortScenesList: PropTypes.func,
  sortAtoZ: PropTypes.bool,
  sortZtoA: PropTypes.bool,
};

export default SortByMovie;
