import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './hooks/useLocalStorage';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const isAlreadyInContacts = contacts.find(contact => contact.name === name);

    if (isAlreadyInContacts) return alert(`${name} is already in contacts.`);

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts(state => [contact, ...state]);
  };

  const deleteContact = contactId => {
    setContacts(state => state.filter(({ id }) => id !== contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <div>
      <h1 className="phonebookTitle">Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className="contactsTitle">Contacts</h2>
      <Filter
        value={filter}
        onChange={event => setFilter(event.target.value)}
      />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
