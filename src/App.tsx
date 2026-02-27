import { ChakraProvider, Box } from "@chakra-ui/react";
import { ParticleBackground } from "./components/ParticleBackground";
import { Navbar } from "./components/Navbar";
import { SobreMi } from "./components/SobreMi";
import { Tecnologias } from "./components/Tecnologias";
import { Proyectos } from "./components/Proyectos";
import { Certificaciones } from "./components/Certificaciones";
import { Experiencia } from "./components/Experiencia";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box position="relative" height="100vh">
        <ParticleBackground />
        {}
        <Navbar />
        <Box
          id="main-content"
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex={1} 
          overflowY="auto"
          paddingTop="72px" 
          css={{
            '&::-webkit-scrollbar': {
              width: '8px',
              backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-track': {
              background: '#010f18',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#04a56b',
              borderRadius: '4px',
              border: '1px solid #010f18',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#05c280',
            },
            scrollbarWidth: 'thin',
            scrollbarColor: '#04a56b #010f18',
          }}
        >
          <main>
            <SobreMi />
            <Experiencia />
            <Tecnologias />
            <Proyectos />
            <Certificaciones />
            <Contacto />
          </main>
          <Footer />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;