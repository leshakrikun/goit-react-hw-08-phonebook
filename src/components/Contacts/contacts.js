import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/actions';
import { deleteFilteredContact } from '../../redux/reducer';
import { contacts } from '../../redux/contacts-selectors';

import s from './contacts.module.css';
let search = '';
const Contacts = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => contacts(state));
  const filterIsArray = Array.isArray(state.filter);

  if (state.items) {
    search = state.items;
  }
  if (filterIsArray) {
    search = state.filter;
  }

  const handleDeleteContact = id => {
    if (filterIsArray) {
      dispatch(deleteFilteredContact(id));
    }
    dispatch(deleteContacts(id));
  };

  return (
    <>
      {state.loader && <h2>Идет загрузка</h2>}
      {state.error && <h2>Ошибка загрузки</h2>}

      {search.length > 0 && (
        <div className={s.contactListformat}>
          <ul className={s.contactList}>
            {search.map(({ id, name, number }) => (
              <li key={id}>
                {name}: {}
                {number}
                <button
                  type="button"
                  className={s.contactItem__btn}
                  onClick={() => handleDeleteContact(id)}
                >
                  Удалить
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default Contacts;
