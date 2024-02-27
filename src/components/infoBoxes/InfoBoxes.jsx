import React from 'react';
import TextBanner from '../textBanner/TextBanner';
import styled from 'styled-components';
import {
  Card,
  CardDescription,
  CardContent,
  CardTitle,
  Button,
} from '../styles/Card.styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; // Responsive frames
`;
const InfoBoxes = () => {
  return (
    <div>
      <TextBanner
        title={'What we provide'}
        subtitle={'Our services'}
      ></TextBanner>
      <Container>
        <Card>
          <CardContent>
            <CardTitle>Title</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              delectus quas eos temporibus rem sint saepe voluptas eveniet
              velit, impedit magnam vel dolor nisi non. Dolore expedita
              molestias ullam qui.
            </CardDescription>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Service Desk</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              delectus quas eos temporibus rem sint saepe voluptas eveniet
              velit, impedit magnam vel dolor nisi non. Dolore expedita
              molestias ullam qui.
            </CardDescription>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Data Recovery</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              delectus quas eos temporibus rem sint saepe voluptas eveniet
              velit, impedit magnam vel dolor nisi non. Dolore expedita
              molestias ullam qui.
            </CardDescription>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>IT Operations</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              delectus quas eos temporibus rem sint saepe voluptas eveniet
              velit, impedit magnam vel dolor nisi non. Dolore expedita
              molestias ullam qui.
            </CardDescription>
            <Button>Read more..</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>User Support</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              delectus quas eos temporibus rem sint saepe voluptas eveniet
              velit, impedit magnam vel dolor nisi non. Dolore expedita
              molestias ullam qui.
            </CardDescription>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>24/7 Services</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              delectus quas eos temporibus rem sint saepe voluptas eveniet
              velit, impedit magnam vel dolor nisi non. Dolore expedita
              molestias ullam qui.
            </CardDescription>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default InfoBoxes;
