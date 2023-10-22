import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieSceneListItem = ({ scene }) => {
  return (
    <article>
      <Link to={`/scene/${scene.id}`}>
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
};

MovieSceneListItem.propTypes = {
  scene: PropTypes.object.isRequired,
};

export default MovieSceneListItem;
