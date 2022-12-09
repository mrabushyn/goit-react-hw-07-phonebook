import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { fetchContacts } from './contactOperations';

const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

console.log(contactsInitialState.contacts.items);

const fetchContactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

// export const { fetchContacts } = fetchContactsSlice.actions;

export default fetchContactsSlice.reducer;
// export const contactsFetchReducer = fetchContactsSlice.reducer;
