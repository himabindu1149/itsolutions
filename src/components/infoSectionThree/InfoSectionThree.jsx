import React from 'react';
import SectionThreeImage from '../../images/section3.png';

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
export const InfoSectionThree = () => {
  return (
    <Container>
      <Wrapper direction={'row-reverse'}>
        <Right>
          <Image src={SectionThreeImage}></Image>
        </Right>
        <Left>
          <Title>WHY TRUST US?</Title>
          <Header>
            Software Asset Management (SAM) / Software Lifecycle Management
          </Header>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Description>
          <List>
            <ListItem> Guarantee processing</ListItem>
            <ListItem> Returns programme</ListItem>
            <ListItem> Certified data deletion</ListItem>
            <ListItem> End-of-life management</ListItem>
            <ListItem> Volume bundling</ListItem>
            <ListItem> Connection to shop systems</ListItem>
          </List>
        </Left>
      </Wrapper>
    </Container>
  );
};
