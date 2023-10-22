import PropTypes from 'prop-types';
import MovieSceneListItem from './MovieSceneListItem';

const MovieSceneList = ({ filteredScenesList }) => {
  const renderScenesList = () => {
    const scene = filteredScenesList.map((scene) => {
      return <MovieSceneListItem key={scene.id} scene={scene} />;
    });
    return scene;
  };
  return <section>{renderScenesList()}</section>;
};

MovieSceneList.propTypes = {
  filteredScenesList: PropTypes.array,
};

export default MovieSceneList;
