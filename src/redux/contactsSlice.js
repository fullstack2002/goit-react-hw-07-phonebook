import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    removeContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    addContact(state, action) {
      state.unshift({ id: nanoid(), ...action.payload });
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const getContacts = state => state.contacts;