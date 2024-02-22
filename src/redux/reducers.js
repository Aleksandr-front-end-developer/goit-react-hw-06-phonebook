import { createSlice, nanoid } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (state, action) => action.payload,
  },
});

const contatsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => [
      ...state,
      { ...action.payload, id: nanoid() },
    ],
    removeContact: (state, action) =>
      state.filter(item => item.id !== action.payload),
  },
});

export const { addContact, removeContact } = contatsSlice.actions;
export const { filterContact } = filterSlice.actions;

export const contatsReducer = contatsSlice.reducer;
export const filterReducer = filterSlice.reducer;
