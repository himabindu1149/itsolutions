import React from 'react';
import styled from 'styled-components';
import sectionImage1 from '../../images/laptopDark.jpg';

export const Container = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: ${({ Height }) => Height};
  background-image: url(${({ sectionImage }) => sectionImage});
  background-size: cover;
  background-repeat: no-repeat;
  //for Mobiles
  @media only screen and (max-width: 600px) {
    background-size: 100% 100%;
    height: 40%;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    background-size: 100% 100%;
    height: 40%;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    background-size: cover;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;
`;
const Title = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
`;

const Description = styled.div`
  color: white;
  width: 50%;
  font-weight: lighter;
  font-size: 20px;
  padding: 10px;
  align-items: center;
`;
export const InfoSectionTwo = () => {
  return (
    <Container sectionImage={sectionImage1}>
      <TextWrapper>
        <Title> Anywhere Workspace!</Title>
        <Description>
          Enable any employee to work anywhere, anytime with seamless employee
          experiences.
        </Description>
        <Description>
          Leverage your infrastructure across any app, any cloud and any device
          for intrinsic security at every layer.
        </Description>
      </TextWrapper>
    </Container>
  );
};
