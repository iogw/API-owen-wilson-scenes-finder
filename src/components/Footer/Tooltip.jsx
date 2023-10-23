import PropTypes from 'prop-types';
import '../../styles/components/footer/Tooltip.scss';

const Tooltip = ({ children }) => {
  return (
    <div>
      <p className="spoiler-title">Spoiler</p>
      <section className="spoiler-text">{children}</section>
    </div>
  );
};
Tooltip.propTypes = {
  children: PropTypes.object,
};
export default Tooltip;
