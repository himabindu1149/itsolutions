import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${({ direction }) => direction};
  @media only screen and (max-width: 600px) {
    margin: 0px;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    margin: 0px;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    margin: 0px 140px 0px 140px;
  }
`;

export const Header = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
  //for Mobiles
  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 25px;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    font-size: 20px;
    text-align: center;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    font-size: 35px;
    text-align: left;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 10px;
  //for Mobiles
  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 20px;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    text-align: center;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    text-align: left;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 20px;
  @media only screen and (max-width: 600px) {
    font-weight: bold;
    text-align: center;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    font-weight: bold;
    padding-right: 5%;
    text-align: center;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    font-weight: lighter;
    padding-right: 0%;
    text-align: left;
  }
`;

export const Left = styled.div`
  width: 60%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 55%;
  }
`;
export const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 50%;
    margin: 0% 5% 0% 0%;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 40%;
  }
`;
export const Image = styled.img`
  width: 100%;
`;

export const List = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid white;
  margin: 4px;

  text-align: left;
  -webkit-box-shadow: 0px -1px 15px -3px
    ${({ theme }) => theme.colors.aliceBlue};
  box-shadow: 0px -1px 15px -3px ${({ theme }) => theme.colors.aliceBlue};
  padding: 20px 20px;
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  @media only screen and (max-width: 600px) {
    margin: 1px;
    padding: 10px 10px;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    margin: 2px;
    padding: 10px 10px;
  }
  @media only screen and (min-width: 992px) {
    min-width: 210px;
  }
`;
