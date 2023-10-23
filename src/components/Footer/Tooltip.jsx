import '../../styles/components/footer/Tooltip.scss';

const Tooltip = ({ children }) => {
  return (
    <div>
      <p className="spoiler-title">Spoiler</p>
      <section className="spoiler-text">{children}</section>
    </div>
  );
};
export default Tooltip;
