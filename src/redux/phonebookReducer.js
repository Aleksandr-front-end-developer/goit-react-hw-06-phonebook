import { createSlice, nanoid } from '@reduxjs/toolkit';

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, { ...action.payload, id: nanoid() }];
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, filterContact } =
  phonebookSlice.actions;

export const phonebookReducer = phonebookSlice.reducer;
