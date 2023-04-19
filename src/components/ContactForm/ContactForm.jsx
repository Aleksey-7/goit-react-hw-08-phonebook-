import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperation';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { nanoid } from '@reduxjs/toolkit';
import { Form } from 'components/ContactForm/ContactForm.styled';
import { Button, TextField } from '@mui/material';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

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
        id: nanoid(),
        name,
        number,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id="standard-basic-name"
        type="text"
        name="name"
        label="Name"
        variant="standard"
        required
        helperText="name may contain only letters, apostrophe, dash and spaces"
        inputProps={{
          pattern: '[a-zA-Zа-яА-Я]{3,}',
        }}
        fullWidth
        sx={{
          mb: '1rem',
          color: '#1976d2',
          backgroundColor: '#fffefe',
          borderRadius: '3px',
        }}
      />
      <TextField
        id="standard-basic-phone"
        type="tel"
        name="number"
        label="Number"
        variant="standard"
        required
        helperText="the phone number must contain between 10 and 15 digits"
        inputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]{10,15}',
        }}
        fullWidth
        sx={{
          mb: '1rem',
          color: '#1976d2',
          backgroundColor: '#fffefe',
          borderRadius: '3px',
        }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: '20px',
        }}
      >
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
