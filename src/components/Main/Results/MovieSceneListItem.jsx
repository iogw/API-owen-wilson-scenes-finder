import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../../styles/components/MovieSceneListItem.scss';

const MovieSceneListItem = ({ scene }) => {
  return (
    <Link to={`/scene/${scene.id}`}>
      <article className="scene-item">
        <img
          className="scene-item__img"
          src={scene.img}
          alt={`Póster de la película ${scene.movieTitle}`}
        />
        <h2 className="scene-item__title">
          {scene.movieTitle} - {scene.year}
        </h2>
        <p className="scene-item__phrase">{scene.phrase}</p>
        <p>Wow #{scene.currentWow} de {scene.totalWows}</p>
      </article>
    </Link>
  );
};

MovieSceneListItem.propTypes = {
  scene: PropTypes.object.isRequired,
};

export default MovieSceneListItem;
