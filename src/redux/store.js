import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contactsSlice'; 
import contactsFetchReducer from './fetchContactsSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsFetchReducer,
    // contacts: contactsReducer,
  },
});
