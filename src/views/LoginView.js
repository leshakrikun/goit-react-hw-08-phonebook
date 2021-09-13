import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth/auth-operations';
import { getContacts } from '../redux/actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import s from './views.module.css';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    dispatch(getContacts());
    setEmail('');
    setPassword('');
  };

  return (
    <div >
      <h1 className={s.login}>Войдите для использования сервиса</h1>

      <Form onSubmit={handleSubmit} style={styles.form} className={s.loginForm} autoComplete="off">
        <Form.Label style={styles.label}>
          Почта
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Label>

        <Form.Label style={styles.label}>
          Пароль
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Password" 
            onChange={handleChange}
          />
        </Form.Label>

        <Button variant="success" type="submit">Войти</Button>
      </Form>
    </div>
  );
}