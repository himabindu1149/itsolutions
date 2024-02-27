import styled, { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import InfoBoxes from './components/infoBoxes/InfoBoxes';
import { InfoSectionOne } from './components/infoSectionOne/InfoSectionOne';
import { InfoSectionTwo } from './components/infoSectionTwo/InfoSectionTwo';
import { InfoSectionThree } from './components/infoSectionThree/InfoSectionThree';
import Teams from './components/team/Teams';
import { InfoSectionFour } from './components/infoSectionFour/InfoSectionFour';
import { Blog } from './components/blogs/Blog';
import Footer from './components/footer/Footer';

const theme = {
  colors: {
    primary: 'darkBlue',
    secondary: 'tomato',
    light: 'black',
    text: 'snow',
    textDark: 'gray',
    bgDefault: 'white',
    bgPrimary: 'darkBlue',
    bgLight: 'aliceBlue',
  },
};
const GlobalStyle = createGlobalStyle`
 
*{
  box-sizing: border-box;
  padding:0;
  margin: 0;
}
`;
const Container = styled.div`
  width: 80%;
  margin: auto;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Navbar />
          <Hero />
          <InfoBoxes />
          <InfoSectionOne />
        </Container>
        <InfoSectionTwo />
        <Container>
          <InfoSectionThree />
        </Container>
        <InfoSectionFour />
        <Teams />
        <Blog />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
