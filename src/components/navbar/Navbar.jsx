import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: auto;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.bgDefault};
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  //Mobiles
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 8%;
  }

  //Tab
  @media screen and (min-width: 600px) {
    width: 100%;
  }

  //Laptops
  @media screen and (min-width: 992px) {
    width: 80%;
    height: 10%;
  }
`;

const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div`
  //Mobiles
  @media screen and (max-width: 600px) {
    display: none;
  }

  //Tab
  @media screen and (min-width: 600px) {
    display: flex;
  }

  //Laptops
  @media screen and (min-width: 992px) {
    display: flex;
  }
`;

const Logo = styled.label`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: x-large;
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  font-size: large;
  align-items: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textDark};
`;
const MenuItem = styled.li`
  list-style: none;
  padding-right: 20px;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  cursor: pointer;
  @media only screen and (min-width: 600px) {
    font-size: 15px;
    margin-right: 10px;
  }
  @media only screen and (min-width: 992px) {
    margin-right: 20px;
    font-size: 20px;
  }
`;

const Button = styled.button`
  padding: 8px 8px;
  color: ${({ theme }) => theme.colors.bgDefault};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 20px;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.bgDefault};
    border: 2px solid blue;
  }
  @media only screen and (min-width: 600px) {
    padding: 8px 15px;
  }
  @media only screen and (min-width: 992px) {
    padding: 10px 20px;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <Left>
        <Logo>Jira Service Management</Logo>
      </Left>
      <Center></Center>
      <Right>
        <Menu>
          <MenuItem>Products</MenuItem>
          <MenuItem>Create Support Ticket</MenuItem>
          <MenuItem>Resources</MenuItem>
          <Button>call us Now!</Button>
        </Menu>
      </Right>
    </Container>
  );
};

export default Navbar;
