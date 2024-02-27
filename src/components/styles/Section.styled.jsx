import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${({ direction }) => direction};
`;

export const Header = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textDark};
`;

export const Left = styled.div`
  width: 60%;
`;
export const Right = styled.div`
  width: 40%;
`;
export const Image = styled.img`
  width: 100%;
`;

export const List = styled.div`
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid white;
  min-width: 200px;
  margin: 4px;
  text-align: left;
  -webkit-box-shadow: 0px -1px 15px -3px
    ${({ theme }) => theme.colors.aliceBlue};
  box-shadow: 0px -1px 15px -3px ${({ theme }) => theme.colors.aliceBlue};
  padding: 20px 20px;
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
`;
