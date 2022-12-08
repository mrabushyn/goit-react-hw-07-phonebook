// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },
//     filter: '',
//   },
//   reducers: {
//     addContact(state, action) {
//       state.contacts.items.push({
//         id: nanoid(),
//         name: action.payload.name,
//         number: action.payload.number,
//       });
//     },
//     removeContact(state, action) {
//       state.contacts.items = state.contacts.items.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     filteredList(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { addContact, removeContact, filteredList } =
//   contactsSlice.actions;

// export default contactsSlice.reducer;
