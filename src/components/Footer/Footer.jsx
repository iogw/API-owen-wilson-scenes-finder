import '../../styles/components/footer/Footer.scss';
import '../../styles/components/footer/Tooltip.scss';
import Tooltip from './Tooltip';

const Footer = () => {
  return (
    <footer className="footer">
      <Tooltip>
        <p>Dice <span className="spoiler__wow">wow</span> en todas sus pelis</p>
      </Tooltip>
    </footer>
  );
};

export default Footer;
