import { Flex, HStack, Text, Box, VStack, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton, useBreakpointValue, Avatar } from "@chakra-ui/react";
import { Link } from 'react-scroll';
import { keyframes } from "@emotion/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const spaceGroteskStyle = {
  fontFamily: '"Space Grotesk", system-ui, sans-serif',
  fontOpticalSizing: 'auto',
  fontWeight: '700', 
  fontStyle: 'normal',
};

const letterSlide = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-3px) rotate(1deg); }
  50% { transform: translateY(-6px) rotate(-1deg); }
  75% { transform: translateY(-3px) rotate(0.5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const rippleEffect = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const shineMove = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const linkStyles = {
    color: "#ffffff", 
    fontWeight: "600", 
    cursor: "pointer",
    position: "relative" as const,
    zIndex: 2,
    opacity: 1, 
  };

  const createEntryAnimation = (delay: number) => ({
    animation: `slideInFromTop 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay}s both`,
  });

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

  const NavLink = ({ to, children, delay = 0 }: { to: string; children: React.ReactNode; delay?: number }) => (
    <Box 
      as="span" 
      position="relative" 
      sx={{
        ...navLinkHoverEffect,
        ...(!isMobile && createEntryAnimation(delay)),
      }}
    >
      <Link 
        to={to} 
        smooth={true} 
        duration={500} 
        style={linkStyles} 
        containerId="main-content" 
        offset={-80}
        onClick={isMobile ? onClose : undefined}
      >
        {children}
      </Link>
    </Box>
  );

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        paddingY={4}
        paddingX={{ base: 4, md: 8 }}
        bg="rgba(1, 15, 24, 0.8)" 
        position="fixed"
        sx={{ backdropFilter: 'blur(10px)' }} 
        width="100%"
        zIndex={1000} 
        boxShadow="0px 4px 20px -7px #04a56b"
        right="0"
        left="0"
        maxWidth="calc(100% - 8px)"
      >
        <Flex align="center" gap={3}>
          <Avatar
            src="https://files.softicons.com/download/game-icons/battlefield-3-game-icons-by-exhumed/ico/Battlefield%203_3.ico"
            name="Bayron AQ"
            size="md"
            border="2px solid"
            borderColor="brand.primary"
            boxShadow="0 0 10px rgba(4, 165, 107, 0.4)"
            transition="box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
            _hover={{
              boxShadow: '0 0 18px rgba(4, 165, 107, 0.7)',
              transform: 'scale(1.08)',
            }}
          />
        <Box
          position="relative"
          display="inline-block"
          sx={{
            transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            _hover: {
              transform: 'scale(1.05)',
            },
            
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

            '@keyframes letterSlide': {
              '0%': { transform: 'translateY(0px) rotate(0deg)' },
              '25%': { transform: 'translateY(-3px) rotate(1deg)' },
              '50%': { transform: 'translateY(-6px) rotate(-1deg)' },
              '75%': { transform: 'translateY(-3px) rotate(0.5deg)' },
              '100%': { transform: 'translateY(0px) rotate(0deg)' },
            },

            '@keyframes rippleEffect': {
              '0%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.05)' },
              '100%': { transform: 'scale(1)' },
            },

            '@keyframes shineMove': {
              '0%': { backgroundPosition: '-200% center' },
              '100%': { backgroundPosition: '200% center' },
            },
          }}
        >
          <Text
            as="span"
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            color="brand.text"
            position="relative"
            zIndex={2} 
            display="inline-block"
            sx={{
              ...spaceGroteskStyle,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              _hover: {
                background: 'linear-gradient(90deg, #e9eef1 25%, #ffffff 50%, #e9eef1 75%)',
                backgroundSize: '200% 100%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                animation: `${shineMove} 0.8s ease-in-out, ${rippleEffect} 0.6s ease-in-out`,
                '& .letter': {
                  display: 'inline-block',
                  animation: `${letterSlide} 0.6s ease-in-out`,
                },
                
                '& .letter:nth-of-type(1)': { animationDelay: '0ms' },
                '& .letter:nth-of-type(2)': { animationDelay: '50ms' },
                '& .letter:nth-of-type(3)': { animationDelay: '100ms' },
                '& .letter:nth-of-type(4)': { animationDelay: '150ms' },
                '& .letter:nth-of-type(5)': { animationDelay: '200ms' },
                '& .letter:nth-of-type(6)': { animationDelay: '250ms' },
                '& .letter:nth-of-type(7)': { animationDelay: '300ms' },
                '& .letter:nth-of-type(8)': { animationDelay: '350ms' },
                '& .letter:nth-of-type(9)': { animationDelay: '400ms' },
              },

              '& .letter': {
                transition: 'all 0.3s ease',
              }
            }}
          >
            <span className="letter">B</span>
            <span className="letter">a</span>
            <span className="letter">y</span>
            <span className="letter">r</span>
            <span className="letter">o</span>
            <span className="letter">n</span>
            <span className="letter">&nbsp;</span>
          </Text>
        </Box>
        </Flex>

        {/* Desktop Navigation */}
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          <NavLink to="sobre-mi" delay={0.2}>About me</NavLink>
          <NavLink to="experiencia" delay={0.3}>Experience</NavLink>
          <NavLink to="tecnologias" delay={0.4}>Technologies</NavLink>
          <NavLink to="proyectos" delay={0.6}>Projects</NavLink>
          <NavLink to="certificaciones" delay={0.8}>Certifications</NavLink>
          <NavLink to="contacto" delay={1.0}>Contact</NavLink>
        </HStack>

        {/* Mobile Hamburger Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="ghost"
          color="white"
          fontSize="20px"
          _hover={{
            bg: "rgba(4, 165, 107, 0.2)",
            color: "brand.primary"
          }}
        />
      </Flex>

      {/* Mobile Drawer Menu */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay bg="rgba(0, 0, 0, 0.8)" />
        <DrawerContent 
          bg="rgba(1, 15, 24, 0.95)" 
          backdropFilter="blur(20px)"
          borderLeft="1px solid rgba(4, 165, 107, 0.3)"
        >
          <DrawerCloseButton 
            color="white" 
            _hover={{ 
              bg: "rgba(4, 165, 107, 0.2)",
              color: "brand.primary" 
            }}
          />
          <DrawerHeader 
            color="brand.text" 
            fontSize="xl" 
            fontFamily={spaceGroteskStyle.fontFamily}
          >
            Navigation
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={6} align="stretch" pt={4}>
              <Box 
                fontSize="lg" 
                py={3}
                px={2}
                borderRadius="md"
                _hover={{ bg: "rgba(4, 165, 107, 0.1)" }}
                transition="all 0.2s ease"
              >
                <NavLink to="sobre-mi">About me</NavLink>
              </Box>

              <Box
                fontSize="lg"
                py={3}
                px={2}
                borderRadius="md"
                _hover={{ bg: "rgba(4, 165, 107, 0.1)" }}
                transition="all 0.2s ease"
              >
                <NavLink to="experiencia">Experience</NavLink>
              </Box>
              
              <Box 
                fontSize="lg" 
                py={3}
                px={2}
                borderRadius="md"
                _hover={{ bg: "rgba(4, 165, 107, 0.1)" }}
                transition="all 0.2s ease"
              >
                <NavLink to="tecnologias">Technologies</NavLink>
              </Box>
              
              <Box 
                fontSize="lg" 
                py={3}
                px={2}
                borderRadius="md"
                _hover={{ bg: "rgba(4, 165, 107, 0.1)" }}
                transition="all 0.2s ease"
              >
                <NavLink to="proyectos">Projects</NavLink>
              </Box>
              
              <Box 
                fontSize="lg" 
                py={3}
                px={2}
                borderRadius="md"
                _hover={{ bg: "rgba(4, 165, 107, 0.1)" }}
                transition="all 0.2s ease"
              >
                <NavLink to="certificaciones">Certifications</NavLink>
              </Box>
              
              <Box 
                fontSize="lg" 
                py={3}
                px={2}
                borderRadius="md"
                _hover={{ bg: "rgba(4, 165, 107, 0.1)" }}
                transition="all 0.2s ease"
              >
                <NavLink to="contacto">Contact</NavLink>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};