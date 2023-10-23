import Button from '../Button';
import '../../styles/components/results/MovieSceneDetail.scss';
import notFound from '../../assets/404.jpg';

const NotFound = () => {
  return (
    <div className="not-found">
      <img
        className="not-found__img"
        src={notFound}
        alt='Imagen de Owen Wilson sorprendido con el mensaje "404 Not Found"'
      />
      <a href="/">
        <Button text="Ir a la búsqueda" btnClass="not-found__back-btn" />
      </a>
    </div>
  );
};

export default NotFound;
