import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.bgDefault};
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div``;

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
`;

const Button = styled.button`
  padding: 8px 8px;
  color: ${({ theme }) => theme.colors.bgDefault};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 10px;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.bgDefault};
    border: 2px solid blue;
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
