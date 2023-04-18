import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px;
  height: 30px;
  border: 1px solid var(--accent-bg-color);
  border-radius: 4px;
  outline: none;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--main-hover-animation);
  &:hover,
  &:focus {
    box-shadow: rgba(142, 0, 0, 0.24) 0px 3px 8px;
    background-color: green;
    border-color: transparent;
    color: #fff;
  }
  svg {
    width: 15px;
    height: 15px;
  }
`;

export const ControlWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;
