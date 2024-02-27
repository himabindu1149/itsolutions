import React from 'react';
import styled from 'styled-components';
import heroImage from '../../images/hero.png';

const Container = styled.div`
  display: flex;
  padding-top: 10%;

  @media only screen and (max-width: 600px) {
    height: 60%;
  }
  @media only screen and (min-width: 600px) {
    height: 50%;
  }
  @media only screen and (min-width: 992px) {
    height: 80%;
  }
`;

const Left = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 992px) {
    width: 60%;
  }
`;
const Right = styled.div``;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  //for Mobiles
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 30px;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 85%;
    font-size: 30px;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 80%;
  }
`;

const Description = styled.p`
  font-size: 20px;

  color: ${({ theme }) => theme.colors.textDark};
  //for Mobiles
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 70%;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 80%;
  }
`;

const Image = styled.img`
  width: 400px;
  @media only screen and (min-width: 600px) {
    width: 400px;
  }
  @media only screen and (min-width: 992px) {
    width: 500px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 20px;
`;

const Button = styled.button`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.bgDefault};
  border: transparent;
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

  @media only screen and (max-width: 600px) {
    padding: 10px 25px;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    padding: 10px 30px;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    padding: 10px 20px;
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
