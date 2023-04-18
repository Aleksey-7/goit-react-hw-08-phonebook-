import { ContactItem } from '../ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

export function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {contacts.map(({ id, name, phonenumber }) => (
        <ContactItem key={id} name={name} phonenumber={phonenumber} id={id} />
      ))}
    </ul>
  );
}
