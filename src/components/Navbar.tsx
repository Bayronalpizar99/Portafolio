import {
  Flex, HStack, Box, VStack, IconButton, useDisclosure,
  Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton,
  useBreakpointValue, Avatar, Text
} from "@chakra-ui/react";
import { Link } from 'react-scroll';
import { keyframes } from "@emotion/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import icon from '../assets/icon.ico';

const spinRing = keyframes`
  to { transform: rotate(360deg); }
`;

const navItems = [
  { to: "sobre-mi", label: "About", num: "01" },
  { to: "experiencia", label: "Experience", num: "02" },
  { to: "tecnologias", label: "Technologies", num: "03" },
  { to: "proyectos", label: "Projects", num: "04" },
  { to: "certificaciones", label: "Certifications", num: "05" },
  { to: "contacto", label: "Contact", num: "06" },
];

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const NavLink = ({ to, children, delay = 0, num }: { to: string; children: React.ReactNode; delay?: number; num?: string }) => (
    <Box
      as="span"
      position="relative"
      role="group"
      sx={{
        ...(!isMobile && {
          animation: `slideInFromTop 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both`,
        }),
        _after: {
          content: '""',
          position: 'absolute',
          width: '0%',
          height: '2px',
          bottom: '-6px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(90deg, transparent, #04a56b, transparent)',
          transition: 'width 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        },
        _hover: {
          _after: {
            width: '120%',
          },
        },
      }}
    >
      <Link
        to={to}
        smooth={true}
        duration={500}
        containerId="main-content"
        offset={-80}
        onClick={isMobile ? onClose : undefined}
        style={{ cursor: "pointer", display: "inline-flex", alignItems: "baseline", gap: "6px" }}
      >
        {num && !isMobile && (
          <Text
            as="span"
            fontSize="10px"
            fontFamily='"Space Grotesk", sans-serif'
            color="#04a56b"
            fontWeight="500"
            opacity={0.7}
            transition="opacity 0.2s ease"
            _groupHover={{ opacity: 1 }}
          >
            {num}
          </Text>
        )}
        <Text
          as="span"
          fontSize="13px"
          fontFamily='"Space Grotesk", sans-serif'
          fontWeight="500"
          color="#e9eef1"
          letterSpacing="0.5px"
          textTransform="uppercase"
          transition="color 0.2s ease"
          _groupHover={{ color: "#04a56b" }}
        >
          {children}
        </Text>
      </Link>
    </Box>
  );

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        py={3}
        px={{ base: 5, md: 10 }}
        bg="rgba(1, 15, 24, 0.7)"
        position="fixed"
        sx={{ backdropFilter: 'blur(20px) saturate(1.5)' }}
        width="100%"
        zIndex={1000}
        right="0"
        left="0"
        maxWidth="calc(100% - 8px)"
        borderBottom="1px solid rgba(4, 165, 107, 0.08)"
        boxShadow="0px 4px 20px -7px rgba(4, 165, 107, 0.65)"
      >
        {/* Logo */}
        <HStack spacing={3}>
          <Box
            position="relative"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            transition="transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
            _hover={{ transform: 'scale(1.08)' }}
            cursor="pointer"
          >
            <Box
              position="absolute"
              inset="-3px"
              borderRadius="full"
              sx={{
                background: 'conic-gradient(from 0deg, transparent 0deg, #04a56b 70deg, #05c280 140deg, #02d68f 180deg, transparent 230deg)',
                animation: `${spinRing} 3s linear infinite`,
              }}
              filter="blur(4px)"
              opacity={0.6}
              zIndex={0}
            />
            <Box
              position="absolute"
              inset="-2px"
              borderRadius="full"
              sx={{
                background: 'conic-gradient(from 0deg, transparent 0deg, #04a56b 70deg, #05c280 140deg, #02d68f 180deg, transparent 230deg)',
                animation: `${spinRing} 3s linear infinite`,
              }}
              zIndex={0}
            />
            <Avatar
              src={icon}
              name="Bayron AQ"
              size="sm"
              border="2px solid #010f18"
              position="relative"
              zIndex={1}
            />
          </Box>
          <Text
            display={{ base: "none", lg: "block" }}
            fontFamily='"Space Grotesk", sans-serif'
            fontWeight="600"
            fontSize="sm"
            color="#e9eef1"
            letterSpacing="0.3px"
          >
            Bayron AQ
          </Text>
        </HStack>

        {/* Desktop Navigation */}
        <HStack spacing={7} display={{ base: "none", md: "flex" }}>
          {navItems.map((item, i) => (
            <NavLink key={item.to} to={item.to} delay={0.15 + i * 0.08} num={item.num}>
              {item.label}
            </NavLink>
          ))}
        </HStack>

        {/* Mobile Hamburger */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="ghost"
          color="white"
          fontSize="18px"
          size="sm"
          _hover={{
            bg: "rgba(4, 165, 107, 0.12)",
            color: "brand.primary"
          }}
        />
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay bg="rgba(0, 0, 0, 0.85)" sx={{ backdropFilter: 'blur(4px)' }} />
        <DrawerContent
          bg="rgba(1, 15, 24, 0.97)"
          backdropFilter="blur(30px)"
          borderLeft="1px solid rgba(4, 165, 107, 0.15)"
        >
          <DrawerCloseButton
            color="white"
            size="sm"
            _hover={{
              bg: "rgba(4, 165, 107, 0.15)",
              color: "brand.primary"
            }}
          />
          <DrawerHeader
            color="brand.text"
            fontSize="sm"
            fontFamily='"Space Grotesk", sans-serif'
            textTransform="uppercase"
            letterSpacing="2px"
            pt={8}
          >
            Menu
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={1} align="stretch" pt={4}>
              {navItems.map((item) => (
                <Box
                  key={item.to}
                  py={4}
                  px={4}
                  borderRadius="lg"
                  _hover={{ bg: "rgba(4, 165, 107, 0.08)" }}
                  transition="all 0.2s ease"
                  borderLeft="2px solid transparent"
                  _active={{ borderLeftColor: "#04a56b" }}
                >
                  <HStack spacing={3}>
                    <Text
                      fontSize="xs"
                      fontFamily='"Space Grotesk", sans-serif'
                      color="#04a56b"
                      fontWeight="500"
                      opacity={0.6}
                    >
                      {item.num}
                    </Text>
                    <NavLink to={item.to}>{item.label}</NavLink>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
