import React from 'react';
import SectionOneImage from '../../images/section1.png';

import {
  Container,
  Wrapper,
  Right,
  Image,
  Left,
  Title,
  Header,
  Description,
  List,
  ListItem,
} from '../styles/Section.styled';
export const InfoSectionOne = () => {
  return (
    <Container>
      <Wrapper direction={'row'}>
        <Right>
          <Image src={SectionOneImage}></Image>
        </Right>
        <Left>
          <Title>WHY CHOOSE US?</Title>
          <Header>IT lifecycle management all in one place</Header>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam, nostrud
          </Description>
          <List>
            <ListItem> Transparent advice</ListItem>
            <ListItem> Volume bundling</ListItem>
            <ListItem> Global IT sourcing</ListItem>
            <ListItem> International deliveries</ListItem>
            <ListItem> Software refuelling</ListItem>
            <ListItem> Nationwide service network</ListItem>
          </List>
        </Left>
      </Wrapper>
    </Container>
  );
};
