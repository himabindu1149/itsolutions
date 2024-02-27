import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
`;
const SubTitle = styled.div`
  font-weight: bold;
  font-size: 50px;
  margin: 5px;
  color: ${({ theme }) => theme.colors.primary};
`;

const TextBanner = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
};

export default TextBanner;
