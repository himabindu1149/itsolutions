import styled from 'styled-components';

export const Card = styled.div`
  width: 330px;
  margin: 10px 10px;
  -webkit-box-shadow: 0px -1px 15px -3px
    ${({ theme }) => theme.colors.aliceBlue};
  box-shadow: 0px -1px 15px -3px ${({ theme }) => theme.colors.aliceBlue};
  background: linear-gradient(
    to right,
    aliceblue 50%,
    ${({ theme }) => theme.colors.bgDefault} 50%
  );
  background-size: 200% 100%;
  background-position: right;
  transition: all 0.5s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.aliceBlue};
    border: 2px solid blue;
    background-position: left bottom;
    cursor: pointer;
  }
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`;

export const CardDescription = styled.div`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 15px;
  text-align: center;
`;
export const Button = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  margin-top: 30px;
  cursor: pointer;
`;

export const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
