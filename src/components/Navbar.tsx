// src/components/Navbar.tsx
import { Flex, HStack, Text, Box } from "@chakra-ui/react";
import { Link } from 'react-scroll';

// Importamos Space Grotesk desde Google Fonts
const spaceGroteskStyle = {
  fontFamily: '"Space Grotesk", system-ui, sans-serif',
  fontOpticalSizing: 'auto',
  fontWeight: '700', // Bold para mayor impacto
  fontStyle: 'normal',
};

export const Navbar = () => {
  const linkStyles = {
    color: "brand.text",
    fontWeight: "medium",
    cursor: "pointer",
    position: "relative" as const,
    zIndex: 2, // Asegurar que los enlaces estén por encima
  };

  // Corregido: z-index negativo para que no interfiera con los clicks
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
      zIndex: -1, // Asegurar que esté detrás del texto
    },
    _hover: {
      _after: {
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left',
      },
    },
  };

  // Función para crear animación de entrada escalonada
  const createEntryAnimation = (delay: number) => ({
    animation: `slideInFromTop 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay}s both`,
  });

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      paddingY={4}
      paddingX={8}
      bg="brand.background"
      position="fixed"
      width="100%"
      zIndex={1000} // Aumentado para asegurar que esté por encima de otros elementos
      boxShadow="0px 4px 20px -7px #04a56b"
      right="0"
      left="0"
      maxWidth="calc(100% - 8px)"
    >
      <Box
        position="relative"
        display="inline-block"
        sx={{
          // SUBRAYADO INFERIOR (original)
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
            zIndex: -2, // Más atrás para no interferir
            animation: 'glowing-underline 6s ease-in-out infinite',
            filter: 'blur(1px)',
            pointerEvents: 'none', // Crucial: evita que interfiera con clicks
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
            zIndex: -2, // Más atrás para no interferir
            animation: 'glowing-underline 6s ease-in-out infinite reverse',
            boxShadow: '0 0 8px #04a56b40, 0 0 16px #04a56b20',
            pointerEvents: 'none', // Crucial: evita que interfiera con clicks
          },

          // OVERLINE SUPERIOR (nuevo)
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
            zIndex: -2, // Más atrás para no interferir
            animation: 'glowing-overline 6s ease-in-out infinite',
            animationDelay: '3s', // Desfase para que vayan alternadas
            filter: 'blur(1px)',
            pointerEvents: 'none', // Crucial: evita que interfiera con clicks
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
            zIndex: -2, // Más atrás para no interferir
            animation: 'glowing-overline 6s ease-in-out infinite reverse',
            animationDelay: '3s', // Mismo desfase
            boxShadow: '0 0 8px #04a56b40, 0 0 16px #04a56b20',
            pointerEvents: 'none', // Crucial: evita que interfiera con clicks
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

          // Animación de entrada para los enlaces del navbar
          '@keyframes slideInFromTop': {
            '0%': {
              opacity: 0,
              transform: 'translateY(-30px) scale(0.8)',
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0) scale(1)',
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
          zIndex={2} // Asegurar que esté por encima de las animaciones
          display="inline-block"
          sx={spaceGroteskStyle} // Aplicamos Space Grotesk
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
            ...createEntryAnimation(0.2),
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
            ...createEntryAnimation(0.4),
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
            ...createEntryAnimation(0.6),
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
            ...createEntryAnimation(0.8),
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
            ...createEntryAnimation(1.0),
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