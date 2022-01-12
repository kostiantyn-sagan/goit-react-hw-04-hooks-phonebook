import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactListItem from '../ContactListItem';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <ContactListItem
            name={name}
            number={number}
            onDelete={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
