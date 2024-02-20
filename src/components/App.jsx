import { lazy, Suspense } from 'react';

import { Contactsform } from './Contactsform/Contactsform';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import { filterContact } from '../redux/phonebookReducer';

const ContactsList = lazy(() => import('./ContactsList/ContactsList'));

export const App = () => {
  const { contacts, filter } = useSelector(state => state.phonebook);
  const dispatch = useDispatch();

  const handleFilter = value => {
    dispatch(filterContact(value));
  };

  const filterContacts = () => {
    if (filter !== '') {
      return contacts.filter(item =>
        item.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
      );
    }
    return contacts;
  };

  return (
    <div className="phonebook">
      <h1>Phonebook</h1>
      <Contactsform contacts={contacts} />
      <h2>Contacts</h2>
      <Filter onFilter={handleFilter} value={filter} />
      <Suspense fallback={<div>Loading...</div>}>
        <ContactsList contacts={filterContacts()} />
      </Suspense>
    </div>
  );
};
