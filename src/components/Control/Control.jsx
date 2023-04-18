import PropTypes from 'prop-types';
import { ControlWrapper, Button } from './Control.styled';
import { FaTrash } from 'react-icons/fa';

export const Controls = ({ id, onDeleteContact, onEditContact }) => {
  return (
    <ControlWrapper>
      <Button type="button" onClick={onEditContact}>
        Edit
      </Button>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        <FaTrash />
        Delete
      </Button>
    </ControlWrapper>
  );
};

export const ControlsSave = ({ id, onDeleteContact }) => {
  return (
    <ControlWrapper>
      <Button type="submit">Save</Button>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        <FaTrash />
        Delete
      </Button>
    </ControlWrapper>
  );
};

Controls.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  onEditContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

ControlsSave.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
