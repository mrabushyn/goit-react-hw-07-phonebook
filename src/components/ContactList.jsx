// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../redux/contactsSlice';
import css from './Phonebook.module.css';

import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactOperations';
import { getContacts, getFilter } from 'redux/selectors';

export default function ContactList() {
  const { items, isLoading, error } = useSelector(getContacts);
  // const items = useSelector(state => state.contacts.contacts.items);
  // const isLoading = useSelector(state => state.contacts.contacts.isLoading);
  // const error = useSelector(state => state.contacts.contacts.error);


  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && !error && <b>Request in progress...</b>}
      {filteredContacts.length > 0 &&
        filteredContacts.map(contact => (
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
