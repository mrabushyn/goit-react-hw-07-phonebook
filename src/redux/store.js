import { configureStore } from '@reduxjs/toolkit';
import contactsFetchReducer from './fetchContactsSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsFetchReducer,
  },
});
