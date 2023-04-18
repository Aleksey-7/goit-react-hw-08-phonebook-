import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactName = styled.p`
  display: flex;
  gap: 10px;
  max-width: 245px;
  font-size: 15px;
  font-weight: 600;
`;
export const ContactTel = styled.p`
  display: flex;
  gap: 10px;
  max-width: 245px;
  font-size: 14px;
`;
