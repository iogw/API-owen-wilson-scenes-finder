import { Link } from 'react-router-dom';
import '../../styles/components/Header.scss';
const Header = () => {
  return (
    <header className="header">
      <Link to={'/'}>
        <h1 className="header__title">Owen Wilson&apos;s Wow</h1>
      </Link>
      <p className="header__description">
        Buscador de las escenas de las pelis donde Owen Wilson dice
        &quot;wow&quot;
      </p>
      <small className="header__spoiler">
        Spoiler:{' '}
        <span className="header__spoiler--span">
          lo dice en todas sus pelis
        </span>
      </small>
    </header>
  );
};

export default Header;
