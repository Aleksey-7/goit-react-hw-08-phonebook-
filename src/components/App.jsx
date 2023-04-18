import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Title, TitleColor, SubTitle } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { selectError, selectIsLoading } from 'redux/selectors';
import { GlobalStyle } from './GlobalStyle';
import { Loader } from './Loader/Loader';
import { Phonebook } from './Phonebook/Phonebook';

export function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>
          Phone<TitleColor>book</TitleColor>
        </Title>
        <Phonebook />

        <SubTitle>Contacts</SubTitle>
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
      </Container>
    </>
  );
}
