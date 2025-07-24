import { Flex, HStack, Text, Box } from "@chakra-ui/react";
import { Link } from 'react-scroll';

const spaceGroteskStyle = {
  fontFamily: '"Space Grotesk", system-ui, sans-serif',
  fontOpticalSizing: 'auto',
  fontWeight: '700', 
  fontStyle: 'normal',
};

export const Navbar = () => {
  const linkStyles = {
    color: "#ffffff", // Blanco puro para máxima visibilidad
    fontWeight: "600", // Peso de fuente más fuerte
    cursor: "pointer",
    position: "relative" as const,
    zIndex: 2,
    opacity: 1, // Asegurar opacidad completa
  };

  
  const navLinkHoverEffect = {
    position: "relative" as const,
    _after: {
      content: '""',
      position: 'absolute',
      width: '100%',
      transform: 'scaleX(0)',
      height: '2px',
      bottom: '-4px',
      left: 0,
      backgroundColor: 'brand.primary',
      transformOrigin: 'bottom right',
      transition: 'transform 0.25s ease-out',
      zIndex: -1, 
    },
    _hover: {
      _after: {
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left',
      },
    },
  };



  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      paddingY={4}
      paddingX={8}
      bg="rgba(1, 15, 24, 0.8)" // Fondo semi-transparente
      position="fixed"
      sx={{ backdropFilter: 'blur(10px)' }} // Efecto "frosted glass"
      width="100%"
      zIndex={1000} 
      boxShadow="0px 4px 20px -7px #04a56b"
      right="0"
      left="0"
      maxWidth="calc(100% - 8px)"
    >
      <Box
        position="relative"
        display="inline-block"
        sx={{
          
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: '-4px',
            left: '0',
            right: '0',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #04a56b80, #05c280, #04a56b80, transparent)',
            backgroundSize: '200% 100%',
            borderRadius: '2px',
            zIndex: -2, 
            animation: 'glowing-underline 6s ease-in-out infinite',
            filter: 'blur(1px)',
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-2px',
            left: '0',
            right: '0',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #04a56b, #05c280, #02d68f, #04a56b, transparent)',
            backgroundSize: '200% 100%',
            borderRadius: '1px',
            zIndex: -2, 
            animation: 'glowing-underline 6s ease-in-out infinite reverse',
            boxShadow: '0 0 8px #04a56b40, 0 0 16px #04a56b20',
            pointerEvents: 'none', 
          },

          
          '& > span::before': {
            content: '""',
            position: 'absolute',
            top: '-4px',
            left: '0',
            right: '0',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #04a56b80, #05c280, #04a56b80, transparent)',
            backgroundSize: '200% 100%',
            borderRadius: '2px',
            zIndex: -2, 
            animation: 'glowing-overline 6s ease-in-out infinite',
            animationDelay: '3s', 
            filter: 'blur(1px)',
            pointerEvents: 'none', 
          },
          '& > span::after': {
            content: '""',
            position: 'absolute',
            top: '-2px',
            left: '0',
            right: '0',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #04a56b, #05c280, #02d68f, #04a56b, transparent)',
            backgroundSize: '200% 100%',
            borderRadius: '1px',
            zIndex: -2, 
            animation: 'glowing-overline 6s ease-in-out infinite reverse',
            animationDelay: '3s', 
            boxShadow: '0 0 8px #04a56b40, 0 0 16px #04a56b20',
            pointerEvents: 'none', 
          },

          '@keyframes glowing-underline': {
            '0%': {
              backgroundPosition: '-100% 0%',
            },
            '50%': {
              backgroundPosition: '100% 0%',
            },
            '100%': {
              backgroundPosition: '200% 0%',
            },
          },

          '@keyframes glowing-overline': {
            '0%': {
              backgroundPosition: '200% 0%',
            },
            '50%': {
              backgroundPosition: '-100% 0%',
            },
            '100%': {
              backgroundPosition: '-200% 0%',
            },
          },


        }}
      >
        <Text
          as="span"
          fontSize="xl"
          fontWeight="bold"
          color="brand.text"
          position="relative"
          zIndex={2} 
          display="inline-block"
          sx={spaceGroteskStyle} // Space Grotesk
        >
          Bayron AQ
        </Text>
      </Box>

      <HStack spacing={8}>
        <Box 
          as="span" 
          position="relative" 
          sx={{
            ...navLinkHoverEffect,
          }}
        >
          <Link 
            to="sobre-mi" 
            smooth={true} 
            duration={500} 
            style={linkStyles} 
            containerId="main-content" 
            offset={-80}
          >
            About me
          </Link>
        </Box>
        <Box 
          as="span" 
          position="relative" 
          sx={{
            ...navLinkHoverEffect,
          }}
        >
          <Link 
            to="tecnologias" 
            smooth={true} 
            duration={500} 
            style={linkStyles} 
            containerId="main-content" 
            offset={-80}
          >
            Technologies
          </Link>
        </Box>
        <Box 
          as="span" 
          position="relative" 
          sx={{
            ...navLinkHoverEffect,
          }}
        >
          <Link 
            to="proyectos" 
            smooth={true} 
            duration={500} 
            style={linkStyles} 
            containerId="main-content" 
            offset={-80}
          >
            Projects
          </Link>
        </Box>

        {/* --- ENLACE A CERTIFICACIONES --- */}
        <Box 
          as="span" 
          position="relative" 
          sx={{
            ...navLinkHoverEffect,
          }}
        >
          <Link 
            to="certificaciones" 
            smooth={true} 
            duration={500} 
            style={linkStyles} 
            containerId="main-content" 
            offset={-80}
          >
            Certifications
          </Link>
        </Box>

        <Box 
          as="span" 
          position="relative" 
          sx={{
            ...navLinkHoverEffect,
          }}
        >
          <Link 
            to="contacto" 
            smooth={true} 
            duration={500} 
            style={linkStyles} 
            containerId="main-content" 
            offset={-80}
          >
            Contact
          </Link>
        </Box>
      </HStack>
    </Flex>
  );
};