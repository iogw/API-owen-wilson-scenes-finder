import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieSceneDetail = ({ sceneData }) => {
  const renderScene = () => {
    return (
      <article>
        <img
          width="300px"
          src={sceneData.img}
          alt={`Cartel de ${sceneData.movieTitle}`}
        />
        <h2>{sceneData.movieTitle}</h2>
        <p>Frase: {sceneData.phrase}</p>
        <p>Director: {sceneData.director}</p>
        <Link target="_blank" to={sceneData.video}>
          Ver escena
        </Link>
        <p>Escucha el wow: </p>
        <audio controls>
          <source src={sceneData.audio} type="audio/mp3" />
        </audio>
      </article>
    );
  };
  return <div>{renderScene()}</div>;
};

MovieSceneDetail.propTypes = {
  sceneData: PropTypes.object,
};

export default MovieSceneDetail;
