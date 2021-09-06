import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/container';
import AppBar from './components/AppBar';
import Phonebook from './components/PhoneBook/phoneBook';
import Contacts from './components/Contacts/contacts';
import Filter from './components/Filter/filter';
import { getContacts } from './redux/actions';
/* import  operations  from '../src/redux/auth/auth-operations'; */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* import TodosView from './views/TodosView';*/
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';

import { authOperations } from './redux/auth'; 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


import './App.css';


export default function App() {
  const dispatch = useDispatch();

 
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <AppBar />

        {/* <Switch> */}
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        {/* <Route path="/todos" component={TodosView} /> */}
      {/* </Switch>  */}

        <Phonebook />
        <Filter />
        <Contacts />
      </Container>
    </>
  );
}


/* 
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]); */

 

/*       <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/todos" component={TodosView} />
      </Switch> */
  