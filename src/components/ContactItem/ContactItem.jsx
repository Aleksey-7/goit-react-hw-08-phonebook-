import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaUserAlt } from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';
import {
  Item,
  ContactTel,
  ContactName,
  ContactInfo,
} from 'components/ContactItem/ContactItem.styled';
import { Controls, ControlsSave } from 'components/Control/Control';
import { EditForm } from '../EditForm/EditForm';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from '../../redux/operations';

export function ContactItem({ name, phonenumber, id }) {
  const [editName, setEditName] = useState(name);
  const [editPhonenumber, setEditPhonenumber] = useState(phonenumber);
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  const handleEditContact = (newName, newPhonenumber) => {
    if (!isEdit) {
      setIsEdit(true);
    } else {
      setEditName(newName);
      setEditPhonenumber(newPhonenumber);
      setIsEdit(false);

      dispatch(
        editContact({
          id,
          name: newName,
          phonenumber: newPhonenumber,
        })
      );
    }
  };

  return (
    <Item>
      {/* if contact saved show contact info */}

      {!isEdit && (
        <ContactInfo>
          <ContactName>
            <FaUserAlt />
            {editName}:
          </ContactName>

          <ContactTel>
            <ImPhone />
            {editPhonenumber}
          </ContactTel>
        </ContactInfo>
      )}

      {/* if contact is edit show edit form */}
      {isEdit && (
        <EditForm
          name={editName}
          phonenumber={editPhonenumber}
          onEditContact={handleEditContact}
        >
          <ControlsSave id={id} onDeleteContact={handleDeleteContact} />
        </EditForm>
      )}

      {!isEdit && (
        <Controls
          id={id}
          onDeleteContact={handleDeleteContact}
          onEditContact={handleEditContact}
        />
      )}
    </Item>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phonenumber: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
