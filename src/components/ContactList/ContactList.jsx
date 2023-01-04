import propTypes from 'prop-types';
import s from './ContList.module.css';

export const ContList = ({ contacts, handleDeleteContact }) => (
  <div>
    <ul className={s.contList}>
      {contacts.map((contact, id) => (
        <li key={id} className={s.contList__item}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={s.contList__btn}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDeleteContact: propTypes.func.isRequired,
};