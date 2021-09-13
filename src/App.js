import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import Container from './components/Container/container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import AppBar from './components/AppBar';
import Phonebook from './components/PhoneBook/phoneBook';
import Contacts from './components/Contacts/contacts';
import Filter from './components/Filter/filter';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import  {authSelectors}  from '../src/redux/auth/auth-selectors';
import   {authOperations}  from '../src/redux/auth/auth-operations';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  
  return (
    <Container>
      {isFetchingCurrentUser ? (
      <h1>Загрузка</h1>
    ) : (
      <>
      <AppBar />
      <Switch>
          <Suspense fallback={<p>Загружаем...</p>}>
            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
            <Phonebook />
            <Filter />
            <Contacts />
            </PrivateRoute>
            
          </Suspense>
        </Switch>       
      </>)}
    </Container>
  );
}


