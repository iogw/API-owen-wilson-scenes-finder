import PropTypes from 'prop-types';
import MovieSceneListItem from './MovieSceneListItem';

const MovieSceneList = ({ filteredScenesList, srchMovieVal, srchYearVal }) => {
  const renderScenesList = () => {
    const scene = filteredScenesList.map((scene) => {
      return <MovieSceneListItem key={scene.id} scene={scene} />;
    });
    return scene;
  };
  return (
    <section>
      {filteredScenesList.length === 0 ? (
        <p>
          Nada por aquí con la búsqueda: {srchMovieVal} y el año {srchYearVal}{' '}
          &#58;&#40;
        </p>
      ) : (
        renderScenesList()
      )}
    </section>
  );
};

MovieSceneList.propTypes = {
  filteredScenesList: PropTypes.array,
  srchMovieVal: PropTypes.string,
  srchYearVal: PropTypes.string,
};

export default MovieSceneList;
