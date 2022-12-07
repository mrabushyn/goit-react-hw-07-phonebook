// import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeContact } from '../redux/contactsSlice';
import css from './Phonebook.module.css';


export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactList}>
          {contact.name}: {contact.number}
          <button
            type="onClick"
            onClick={() => {
              dispatch(removeContact(contact.id));
            }}
            className={css.delBtnStyle}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
