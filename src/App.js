import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *{
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 }
body{
  background-color: ${(props) => props.theme.colors.default};
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap');
}
`;
const Container = styled.div`
  display: flex;
  border: solid ${(props) => props.theme.colors.primary} 2px;
`;

const Box = styled.div`
  background-color: ${({ bgcolor }) => bgcolor};
  height: 200px;
  flex: 1; // flex width instaed of width property
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
`;

const Descrption = styled.p`
  color: ${(props) => props.theme.colors.secondary};
`;

const theme = {
  colors: {
    primary: 'red',
    secondary: 'purple',
    default: 'white',
  },
};
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Title>Styled Component</Title>
        <Descrption>test description</Descrption>
        <Container>
          <Box bgcolor="red" />
          <Box bgcolor="blue" />
          <Box bgcolor="green" />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
