import React from 'react';
import styled from 'styled-components';
import heroImage from '../../images/hero.png';

const Container = styled.div`
  height: 90%;
  display: flex;
`;

const Left = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const Right = styled.div``;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
`;

const Description = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textDark};
`;

const Image = styled.img`
  width: 400px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.bgDefault};
  border: transparent;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 20px;
  background: linear-gradient(
    to right,
    aliceblue 50%,
    ${({ theme }) => theme.colors.primary} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid blue;
    background-position: left bottom;
    cursor: pointer;
  }
`;
const Hero = () => {
  return (
    <Container>
      <Left>
        <Title>
          The ITSM solution that unites IT, development, and business teams
        </Title>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
          eveniet nisi delectus possimus distinctio exercitationem ad explicabo
          quas nam iure nostrum quo consequatur, recusandae excepturi
          necessitatibus ducimus alias est dolorem.
        </Description>
        <ButtonContainer>
          <Button>About us</Button>
          <Button>Contact us</Button>
        </ButtonContainer>
      </Left>
      <Right>
        <Image src={heroImage}></Image>
      </Right>
    </Container>
  );
};

export default Hero;
