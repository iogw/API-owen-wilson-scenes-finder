import PropTypes from 'prop-types';
import NotFound from './NotFound';
import Button from '../Button';
import '../../styles/components/results/MovieSceneDetail.scss';

const MovieSceneDetail = ({ sceneData }) => {
  const renderScene = () => {
    return (
      <article className="scene-details">
        <Button
          text="Volver Atrás"
          btnClass="scene-details__back-btn"
          hndlFunc={() => window.history.back()}
        />
        <div className="scene-details-main-info">
          <img
            className="scene-details-main-info__img"
            src={sceneData.img}
            alt={`Cartel de ${sceneData.movieTitle}`}
          />
          <div>
            <h2 className="scene-details-main-info__title">
              <i className="fa-solid fa-film"></i> {sceneData.movieTitle}
            </h2>
            <p>{sceneData.year}</p>
            <p className="scene-details-main-info__director">
              <i className="fa-solid fa-clapperboard"></i> Director:{' '}
              {sceneData.director}
            </p>
            <p>Owen Wilson en el papel de: </p>
            <p>
              <i className="fa-regular fa-user"></i> {sceneData.character}{' '}
              <i className="fa-regular fa-user"></i>
            </p>
            <p className="scene-details-main-info__phrase">
              <i className="fa-solid fa-quote-left"></i> {sceneData.phrase}{' '}
              <i className="fa-solid fa-quote-right"></i>
            </p>
            <p>Momento de la película: {sceneData.timeStamp}</p>
            <p>
              <span className="detail">WOW #{sceneData.currentWow}</span> de un
              total de {sceneData.totalWows} en esta película.
            </p>
          </div>
        </div>
        <div className="scene-details-media">
          <a target="_blank" href={sceneData.video} rel="noreferrer">
            <Button
              text="Ver escenas"
              btnClass="scene-details-media__video-url"
            >
              <i className="fa-brands fa-youtube"></i>
            </Button>
          </a>
          <p>
            <i className="fa-solid fa-volume-high"></i> Escucha el wow
          </p>
          <audio className="scene-details-media__audio" controls>
            <source src={sceneData.audio} type="audio/mp3" />
          </audio>
        </div>
      </article>
    );
  };
  return <div>{sceneData ? renderScene() : <NotFound />}</div>;
};

MovieSceneDetail.propTypes = {
  sceneData: PropTypes.object,
};

export default MovieSceneDetail;
