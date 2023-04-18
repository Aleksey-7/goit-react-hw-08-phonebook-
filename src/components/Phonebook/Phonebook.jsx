import React from 'react';
import { Form, FormLabel, Input, Button, ButtonText } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import { Report } from 'notiflix/build/notiflix-report-aio';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const phonenumber = form.elements.phonenumber.value;

    const isNotUnique = contacts.some(contact => contact.name === name);
    if (isNotUnique) {
      return Report.warning(
        `${name}`,
        'This user is already in the contact list.',
        'OK'
      );
    }

    dispatch(
      addContact({
        name,
        phonenumber,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Name
        <Input type="text" name="name" />
      </FormLabel>
      <FormLabel>
        Number
        <Input type="tel" name="phonenumber" />
      </FormLabel>
      <Button type="submit">
        <ButtonText>Add contact</ButtonText>
        <BsFillPersonPlusFill size={20} />
      </Button>
    </Form>
  );
};
