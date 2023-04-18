import styled from 'styled-components';

export const Form = styled.form`
  padding: 20px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-family: 'Segoe UI';
  font-size: 18px;
  border: 2px solid var(--accent-text-color);
  border-radius: 12px;
`;

export const FormLabel = styled.label`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 17px;
`;
export const Input = styled.input`
  padding: 5px;
  width: auto;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 17px;
  transition: border var(--main-hover-animation);
  &:hover,
  &:focus {
    border: 2px solid var(--accent-text-color);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 200px;
  border: 2px solid var(--accent-text-color);
  border-radius: 4px;
  outline: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--main-hover-animation);
  &:hover,
  &:focus {
    box-shadow: rgba(22, 100, 226, 0.24) 0px 3px 8px;
    background-color: green;
    border-color: transparent;
    color: #fff;
  }
`;

export const ButtonText = styled.span`
  margin-right: 10px;
`;
