import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { handleContactsState, handleFilterState } from '../../redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(handleContactsState);
  const filter = useSelector(handleFilterState);

  const filterContacts = () => {
    if (filter !== '') {
      return contacts.filter(item =>
        item.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
      );
    }
    return contacts;
  };

  return (
    <ul>
      {filterContacts().map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactsList;
