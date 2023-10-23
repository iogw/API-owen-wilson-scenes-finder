import '../../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <small className="footer__spoiler">
        Spoiler:{' '}
        <span className="footer__spoiler--span">
          lo dice en todas sus pelis
        </span>
      </small>
    </footer>
  );
};

export default Footer;
