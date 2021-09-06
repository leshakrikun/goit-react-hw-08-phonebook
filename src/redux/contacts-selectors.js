export const getVisibleContacts = (state, value) => {
  if (value) {
    const normalizedFilter = value.toLowerCase();
    return state.filter(cont =>
      cont.name.toLowerCase().includes(normalizedFilter),
    );
  }
  return state.contacts;
};

export const contacts = state => getVisibleContacts(state);
export const forFilterState = state => state.contacts.items;
