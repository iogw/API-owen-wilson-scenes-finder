import PropTypes from 'prop-types';

const MovieSceneList = ({ filteredScenesList }) => {
  const renderScenesList = () => {
    const scene = filteredScenesList.map((scene, i) => {
      return (
        <article key={i}>
          <img
            width="100px"
            src={scene.img}
            alt={`Póster de la película ${scene.movieTitle}`}
          />
          <h2>
            {scene.movieTitle} - {scene.year}
          </h2>
          <p>{scene.phrase}</p>
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
