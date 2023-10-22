import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieSceneList = ({ filteredScenesList }) => {
  const renderScenesList = () => {
    const scene = filteredScenesList.map((scene, i) => {
      return (
        <article key={i}>
          <Link to="/card">
            <img
              width="100px"
              src={scene.img}
              alt={`Póster de la película ${scene.movieTitle}`}
            />
            <h2>
              {scene.movieTitle} - {scene.year}
            </h2>
            <p>{scene.phrase}</p>
          </Link>
        </article>
      );
    });
    return scene;
  };
  return <>{renderScenesList()}</>;
};

MovieSceneList.propTypes = {
  filteredScenesList: PropTypes.array,
};

export default MovieSceneList;
