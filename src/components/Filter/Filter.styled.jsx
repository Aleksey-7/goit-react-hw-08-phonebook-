import styled from 'styled-components';

export const FilterLabel = styled.label`
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
`;

export const Text = styled.p`
  font-weight: 600;
  color: var(--main-text-color);
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 5px;
  width: 80%;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 17px;
  transition: border var(--main-hover-animation);
  &:hover,
  &:focus {
    border: 2px solid var(--accent-bg-color);
  }
`;
