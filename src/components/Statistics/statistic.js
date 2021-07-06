import PropTypes from "prop-types";
import s from "../Statistics/Statistics.module.css";

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={`${s.item} ${s[id]}`} key={id}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
