import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/reducer';
import { getVisibleContacts } from '../../redux/contacts-selectors';
import { forFilterState } from '../../redux/contacts-selectors';
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types';
import s from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filterState = useSelector(state => forFilterState(state));

  const handleChange = e => {
    const { value } = e.target;
    const filterCont = getVisibleContacts(filterState, value);
    dispatch(filterContact(filterCont));
  };

  return (
    <>
      <h2>Contacts</h2>
      <Form className={s.findcontacts}>
        Find contacts by name
        <Form.Control
          className={s.findInput}
          type="text"
          name="filter"
          onChange={handleChange}
        />
      </Form>
    </>
  );
};

export default Filter;
Filter.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
