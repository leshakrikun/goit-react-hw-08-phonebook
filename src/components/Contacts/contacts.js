import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/actions';
import { deleteFilteredContact } from '../../redux/reducer';
import { contacts } from '../../redux/contacts-selectors';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

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
      {search.length > 0 && (
        <div className={s.contactListformat}>
          <ListGroup as="ul" variant="flush" className={s.contactList}>
            {search.map(({ id, name, number }) => (
              <ListGroup.Item as="li" variant="info" className={s.contactListItem} key={id}>
                <p className={s.contactListText}>
                {name}: {}
                {number}
                </p>
                <Button
                  type="button" variant="danger"
                  className={s.contactItem__btn}
                  onClick={() => handleDeleteContact(id)}
                >
                  Удалить
                </Button>
                </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
    </>
  );
};
export default Contacts;
