import propTypes from 'prop-types';
import s from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => (
  <div className={s.wraperContactList}>
    <ul className={s.contactList}>
      {contacts.map((contact, id) => (
        <li key={id} className={s.contactListItem}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={s.contactListItemBtn}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};