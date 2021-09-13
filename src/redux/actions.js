import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async contact => {
    const result = await axios.post('/contacts', contact);
    return result.data;
  },
);

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const result = await axios.get('/contacts');
    return result.data;
  },
);
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    const result = await axios.delete(`/contacts/${id}`);
    return result.data;
  },
);