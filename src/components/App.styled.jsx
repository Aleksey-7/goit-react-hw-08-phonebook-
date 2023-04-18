import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 10px 50px 10px;
  max-width: 768px;
  min-height: 300px;
  border-radius: 8px;
  background-color: var(--main-bg-color);
  box-shadow: rgba(46, 0, 0, 0.5) 5px 13px 18px;
`;

export const Title = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 2px;
  color: var(--main-text-color);
  margin-bottom: 30px;
`;

export const SubTitle = styled.h2`
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--main-text-color);
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const TitleColor = styled.span`
  color: var(--accent-text-color);
`;
