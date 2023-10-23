import { Link } from 'react-router-dom';
import '../../styles/components/header/Header.scss';
const Header = () => {
  return (
    <header id="header" className="header">
      <Link to={'/'}>
        <h1 className="header__title">Owen Wilson&apos;s Wow</h1>
      </Link>
      <p className="header__description">
        Buscador de las escenas de las pelis donde Owen Wilson dice
        &quot;wow&quot;
      </p>
    </header>
  );
};

export default Header;
