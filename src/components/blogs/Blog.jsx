import React from 'react';
import styled from 'styled-components';
import cardImage1 from '../../images/card1.jpg';
import cardImage2 from '../../images/card2.jpg';
import cardImage3 from '../../images/card3.png';
import TextBanner from '../textBanner/TextBanner';
import {
  Button,
  Card,
  CardContent,
  CardImage,
  CardTitle,
} from '../styles/Card.styled';
import { Description } from '../styles/Section.styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 5%;
`;
export const Blog = () => {
  return (
    <div>
      <TextBanner title={'Our Blogs'} subtitle={'Recent News'} />
      <Container>
        <Card>
          <CardContent padding={'0.5%'}>
            <CardImage src={cardImage1} />
            <CardTitle>Title</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eveniet eaque repudiandae facere suscipit, dicta ullam
              pariatur deleniti voluptatum ipsa ut nobis quisquam sequi, cumque,
              explicabo animi veniam nihil sit.
            </Description>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'0.5%'}>
            <CardImage src={cardImage2} />
            <CardTitle>Title</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eveniet eaque repudiandae facere suscipit, dicta ullam
              pariatur deleniti voluptatum ipsa ut nobis quisquam sequi, cumque,
              explicabo animi veniam nihil sit.
            </Description>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'0.5%'}>
            <CardImage src={cardImage3} />
            <CardTitle>Title</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eveniet eaque repudiandae facere suscipit, dicta ullam
              pariatur deleniti voluptatum ipsa ut nobis quisquam sequi, cumque,
              explicabo animi veniam nihil sit.
            </Description>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
