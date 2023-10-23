import '../../styles/components/footer/Footer.scss';
import Tooltip from './Tooltip';

const Footer = () => {
  return (
    <footer className="footer">
      <Tooltip>
        <p>Lo dice en todas sus pelis</p>
      </Tooltip>
      <a href="#header" className='footer__arrow-up'><i className="fa-solid fa-arrow-up"></i></a>
    </footer>
  );
};

export default Footer;
