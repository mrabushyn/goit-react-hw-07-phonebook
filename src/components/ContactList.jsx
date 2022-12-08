// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../redux/contactsSlice';
import css from './Phonebook.module.css';

import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactOperations';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

export default function ContactList() {
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && <p>Loading contacts...</p>}
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
      {error && <p>{error}</p>}
    </ul>
  );
}
