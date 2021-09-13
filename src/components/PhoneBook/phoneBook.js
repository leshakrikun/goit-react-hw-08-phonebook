import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from '../../redux/actions';
import { contacts } from '../../redux/contacts-selectors';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import s from './phonebook.module.css';

const Phonebook = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => contacts(state));
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { items } = state;

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const result = items.find(state => name === state.name);
    if (result) {
      alert(name + ` is already in contact`);
    } else {
      dispatch(createContact({ name, number, id: uuidv4() }));
    }
    setName('');
    setNumber('');
  };

  return (
    <div className={s.phonebook}>
      <h2>Phonebook</h2>
      <div className={s.formPhoneBook}>
        <p>Name</p>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            onChange={handleChange}
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <p>Number</p>
          <Form.Control
            type="tel"
            name="number"
            onChange={handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <Button variant="info" type="submit" className={s.phoneBookButton}>
            Add contact
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Phonebook;
