import PropTypes from 'prop-types';
import '../styles/components/Button.scss';

const Button = ({ text, btnClass, hndlFunc, children }) => {
  return (
    <button className={`btn ${btnClass}`} onClick={hndlFunc}>
     {text} {children}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  btnClass: PropTypes.string,
  hndlFunc: PropTypes.func,
  children: PropTypes.object,
};

export default Button;
