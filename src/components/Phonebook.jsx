import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { useSelector } from 'react-redux';
import Filter from './Filter';
import ContactList from './ContactList';
import ContactForm from './ContactForm';


export default function Phonebook() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts.items);

  const formSubmitHandler = ({ name, number }) => {
    const normalizedSameName = name.toLowerCase();

    const findSameEl = contacts.find(
      contact => contact.name.toLowerCase() === normalizedSameName
    );

    findSameEl
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact({ name, number }));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm formSubmitHandler={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
