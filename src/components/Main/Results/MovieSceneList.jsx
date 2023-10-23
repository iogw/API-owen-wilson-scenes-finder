import PropTypes from 'prop-types';
import MovieSceneListItem from './MovieSceneListItem';
import '../../../styles/components/MovieSceneList.scss';

const MovieSceneList = ({
  filteredScenesList,
  isLoading,
  srchMovieVal,
  srchYearVal,
}) => {
  const renderScenesList = () => {
    const scene = filteredScenesList.map((scene) => {
      return <MovieSceneListItem key={scene.id} scene={scene} />;
    });
    return scene;
  };
  return (
    <section className="search-results">
      {filteredScenesList.length === 0 && !isLoading ? (
        <p className="search-results__message">
          Nada por aquí con título &quot;{srchMovieVal} &quot; y año &quot;
          {srchYearVal === 'all' ? 'todos' : srchYearVal}&quot; &#128528;
        </p>
      ) : (
        renderScenesList()
      )}
    </section>
  );
};

MovieSceneList.propTypes = {
  filteredScenesList: PropTypes.array,
  isLoading: PropTypes.bool,
  srchMovieVal: PropTypes.string,
  srchYearVal: PropTypes.string,
};

export default MovieSceneList;
