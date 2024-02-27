import React from 'react';
import styled from 'styled-components';
import avatarImage1 from '../../images/staff1.jpg';
import avatarImage2 from '../../images/staff2.jpg';
import avatarImage3 from '../../images/staff3.jpg';
import avatarImage4 from '../../images/staff4.jpg';
import TextBanner from '../textBanner/TextBanner';

const Container = styled.div`
  padding-top: 5%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 250px;
  display: flex;
  margin: 0.5%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px -1px 15px -3px
    ${({ theme }) => theme.colors.aliceBlue};
  box-shadow: 0px -1px 15px -3px ${({ theme }) => theme.colors.aliceBlue};
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover; // fit within the div
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemberName = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

const TeamPosition = styled.div`
  color: ${({ theme }) => theme.colors.textDark};
`;
const Teams = () => {
  return (
    <Container>
      <TextBanner title={'We are Union'} subtitle={'Our Team'} />
      <Wrapper>
        <Card>
          <CardImage src={avatarImage1} />
          <TextWrapper>
            <MemberName>John Doe</MemberName>
            <TeamPosition>Marketing Specialist</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={avatarImage2} />
          <TextWrapper>
            <MemberName>Jane Doe</MemberName>
            <TeamPosition>Project Manager</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={avatarImage3} />
          <TextWrapper>
            <MemberName>Mary bean</MemberName>
            <TeamPosition>Web Designer</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={avatarImage4} />
          <TextWrapper>
            <MemberName>Rock Bean</MemberName>
            <TeamPosition>Marketing Coordinator</TeamPosition>
          </TextWrapper>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Teams;
