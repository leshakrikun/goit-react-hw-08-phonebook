import { createSlice } from '@reduxjs/toolkit';
import { deleteContacts, createContact, getContacts } from './actions';

const initialState = {
  items: [],
  loader: false,
  error: '',
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContact(state, action) {
      return { ...state, filter: action.payload };
    },
    deleteFilteredContact(state, action) {
      return {
        ...state,
        filter: [...state.filter.filter(state => state.id !== action.payload)],
      };
    },
  },

  extraReducers: {
    [deleteContacts.pending]: state => {
      state.loader = true;
    },
    [deleteContacts.rejected]: state => {
      state.loader = false;
      state.error = 'Error';
    },
    [deleteContacts.fulfilled]: (state, action) => {
      state.loader = false;
      state.error = '';
      state.items = state.items.filter(state => state.id !== action.meta.arg);
    },
    [createContact.pending]: (state, action) => {
      state.loader = true;
    },
    [createContact.rejected]: (state, action) => {
      state.loader = false;
      state.error = 'Error';
    },
    [createContact.fulfilled]: (state, action) => {
      state.loader = false;
      state.error = '';
      state.items = [...state.items, action.payload];
    },
    [getContacts.pending]: state => {
      state.loader = true;
    },
    [getContacts.rejected]: state => {
      state.loader = false;
      state.error = 'Error';
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.error = '';
      state.items = [...state.items, ...payload];
    },
  },
});

export const { filterContact, deleteFilteredContact } = contactsSlice.actions;
export default contactsSlice.reducer;
