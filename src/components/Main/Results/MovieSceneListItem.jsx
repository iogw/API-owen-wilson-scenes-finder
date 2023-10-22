import React from 'react';
import PropTypes from 'prop-types';

const MovieSceneListItem = ({ sceneData }) => {
  console.log(sceneData);
  const renderScene = () => {
    return <article>
      <img width="300px" src={sceneData.img} alt={`Cartel de ${sceneData.movieTitle}`} />
      <h2>{sceneData.movieTitle}</h2>
      
    </article>
    }
  return <div>{renderScene()}</div>;
};

MovieSceneListItem.propTypes = {};

export default MovieSceneListItem;
