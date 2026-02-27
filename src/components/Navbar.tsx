import { Flex, HStack, Box, VStack, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton, useBreakpointValue, Avatar } from "@chakra-ui/react";
import { Link } from 'react-scroll';
import { keyframes } from "@emotion/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import icon from '../assets/icon.ico';

const spaceGroteskStyle = {
  fontFamily: '"Space Grotesk", system-ui, sans-serif',
  fontOpticalSizing: 'auto',
  fontWeight: '700', 
  fontStyle: 'normal',
};

const spinRing = keyframes`
  to { transform: rotate(360deg); }
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
        <Box
          position="relative"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          transition="transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
          _hover={{ transform: 'scale(1.1)' }}
          cursor="pointer"
        >
          {/* Blurred outer glow */}
          <Box
            position="absolute"
            inset="-3px"
            borderRadius="full"
            sx={{
              background: 'conic-gradient(from 0deg, transparent 0deg, #04a56b 70deg, #05c280 140deg, #02d68f 180deg, transparent 230deg)',
              animation: `${spinRing} 2.5s linear infinite`,
            }}
            filter="blur(5px)"
            opacity={0.8}
            zIndex={0}
          />
          {/* Sharp ring */}
          <Box
            position="absolute"
            inset="-2px"
            borderRadius="full"
            sx={{
              background: 'conic-gradient(from 0deg, transparent 0deg, #04a56b 70deg, #05c280 140deg, #02d68f 180deg, transparent 230deg)',
              animation: `${spinRing} 2.5s linear infinite`,
            }}
            zIndex={0}
          />
          <Avatar
            src={icon}
            name="Bayron AQ"
            size="md"
            border="2px solid #010f18"
            position="relative"
            zIndex={1}
          />
        </Box>

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