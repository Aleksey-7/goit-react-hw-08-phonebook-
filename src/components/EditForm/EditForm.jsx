import PropTypes from 'prop-types';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  EditFormStyled,
  EditInput,
  EditFormLabel,
  CustomError,
  EditFormWrapper,
} from './EditForm.styled';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phonenumber: Yup.number()
    .positive('!!! > 0 !!!')
    .min(2, 'Too Short!')
    .required('Required'),
});

export const EditForm = ({ name, phonenumber, onEditContact, children }) => {
  const handleSubmit = (values, { resetForm }) => {
    const { name, phonenumber } = values;
    onEditContact(name, phonenumber);
    resetForm();
  };
  return (
    <Formik
      initialValues={{ name, phonenumber }}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      <EditFormStyled autoComplete="off">
        <EditFormWrapper>
          <EditFormLabel>
            <FaUserAlt fill="lightgreen" />
            <EditInput type="text" name="name" />
            <ErrorMessage component={CustomError} name="name" />
          </EditFormLabel>
          <EditFormLabel>
            <ImPhone fill="lightgreen" />
            <EditInput type="tel" name="phonenumber" />
            <ErrorMessage component={CustomError} name="phonenumber" />
          </EditFormLabel>
        </EditFormWrapper>
        {children}
      </EditFormStyled>
    </Formik>
  );
};

EditForm.propTypes = {
  name: PropTypes.string.isRequired,
  phonenumber: PropTypes.string.isRequired,
  children: PropTypes.node,
  onEditContact: PropTypes.func.isRequired,
};
