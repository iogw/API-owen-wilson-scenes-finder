import PropTypes from 'prop-types';
import '../../../styles/components/Loader.scss';

const Loading = ({ loading }) => {
  return loading ? <span className="loader" /> : null;
};

Loading.propTypes = {
  loading: PropTypes.bool,
};

export default Loading;
