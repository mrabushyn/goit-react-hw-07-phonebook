import axios from 'axios';
import {
  fetchingInProgress,
  fetchAll,
  fetchingError,
} from './fetchContactsSlice';

axios.defaults.baseURL = 'https://638ec7284ddca317d7e5fbf1.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts/contacts');
    dispatch(fetchAll(response.data));
    console.log('response.data', response.data);

  } catch (e) {
    dispatch(fetchingError(e.message));

  }
};


export const addContact = () => async dispatch => {
  try {
    dispatch(addContact());
    const response = await axios.post('/contacts/contacts');

    console.log('response', response);


  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};