import PropTypes from 'prop-types';
import '../../styles/components/filters/Filter.scss';

const SortByMovie = ({ handleSortScenesList, sortOldToNew, sortNewToOld }) => {
  const handleClick = (e) => {
    handleSortScenesList(e.currentTarget.id);
  };
  return (
    <div>
      <p>
        Ordenar por título:{' '}
        <button
          className={sortOldToNew ? 'sort-active' : ''}
          id={'sortOldToNew'}
          onClick={handleClick}
        >
          <i className="fa-regular fa-calendar-plus sort-by"></i>
        </button>
        <button
          className={sortNewToOld ? 'sort-active' : ''}
          id={'sortNewToOld'}
          onClick={handleClick}
        >
          <i className="fa-regular fa-calendar-minus sort-by"></i>
        </button>
      </p>
    </div>
  );
};

SortByMovie.propTypes = {
  handleSortScenesList: PropTypes.func,
  sortOldToNew: PropTypes.bool,
  sortNewToOld: PropTypes.bool,
};

export default SortByMovie;
