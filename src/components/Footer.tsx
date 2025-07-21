// src/components/Footer.tsx
import { Box, Text, HStack, Link, Icon, VStack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box
      as="footer"
      py={8}
      px={8}
      bg="rgba(1, 15, 24, 0.6)" // Mismo color del panel de contacto
      borderTop="1px solid rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(10px)"
      color="gray.400"
    >
      <VStack spacing={4} maxW="container.lg" mx="auto">
        
        {/* 1. Iconos de Redes Sociales */}
        <HStack spacing={6}>
          {/* --- ENLACE DE LINKEDIN ACTUALIZADO --- */}
          <Link href="https://www.linkedin.com/in/bayron-alpízar-quesada-21439a126" isExternal _hover={{ color: 'brand.primary' }}>
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
          <Link href="https://github.com/Bayronalpizar99" isExternal _hover={{ color: 'brand.primary' }}>
            <Icon as={FaGithub} boxSize={6} />
          </Link>
        </HStack>

        {/* 2. Texto de Desarrollador */}
        <Text>
          Desarrollado por{" "}
          <Link 
            href="https://github.com/Bayronalpizar99" 
            isExternal 
            color="brand.primary"
            fontWeight="bold"
            _hover={{ textDecoration: 'underline' }}
          >
            @Bayronalpizar99
          </Link>
        </Text>

        {/* 3. Texto de Copyright */}
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Bayron AQ. Todos los derechos reservados.
        </Text>

      </VStack>
    </Box>
  );
};