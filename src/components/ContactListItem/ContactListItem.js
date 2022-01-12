import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

export default function ContactListItem({ name, number, onDelete }) {
  return (
    <div className={s.container}>
      <span className={s.marker}></span>
      <p className={s.name}>{`${name}:`}</p>
      <a className={s.tel} href={`tel:${number}`}>
        {number}
      </a>
      <button type="button" className={s.btn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
