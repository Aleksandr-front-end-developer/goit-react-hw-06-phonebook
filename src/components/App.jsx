import { lazy, Suspense } from 'react';
import { Contactsform } from './Contactsform/Contactsform';
import { Filter } from './Filter/Filter';
import './style.scss';

const ContactsList = lazy(() => import('./ContactsList/ContactsList'));

export const App = () => (
  <div className="phonebook">
    <h1>Phonebook</h1>
    <Contactsform />
    <h2>Contacts</h2>
    <Filter />
    <Suspense fallback={<div>Loading...</div>}>
      <ContactsList />
    </Suspense>
  </div>
);
