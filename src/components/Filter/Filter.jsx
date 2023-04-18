import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { FilterLabel, Input, Text } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();

  const handleSetFilter = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <FilterLabel>
      <Text>Find contacts by name</Text>
      <Input type="text" onChange={handleSetFilter} />
    </FilterLabel>
  );
}
