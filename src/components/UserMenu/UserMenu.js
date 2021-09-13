import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../redux/auth/auth-operations';
import { authSelectors } from '../../redux/auth/auth-selectors';
import { useEffect } from 'react';
import { getContacts } from '../../redux/actions';
import Button from 'react-bootstrap/Button';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const mail = useSelector(authSelectors.getUsermail);
  
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Email: {mail}</span>
      <Button type="button"  variant="secondary" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </Button>
    </div>
  );
}
