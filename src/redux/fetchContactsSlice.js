import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';


const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const fetchContactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    fetchingInProgress(state) {
      state.contacts.isLoading = true;
    },
    fetchAll(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    fetchingError(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    addContact(state, action) {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
      console.log(action.payload);
      // state.contacts.error = action.payload;
    },
  },
});

export const { fetchingInProgress, fetchAll, fetchingError } =
  fetchContactsSlice.actions;

export default fetchContactsSlice.reducer;