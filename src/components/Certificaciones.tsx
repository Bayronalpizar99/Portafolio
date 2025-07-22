import { Box, Heading, VStack, Text, Link, Icon, Flex } from "@chakra-ui/react";
import { FaExternalLinkAlt, FaMicrosoft, FaCertificate } from "react-icons/fa";
import { SiCoursera, SiOracle } from "react-icons/si";

// Define la estructura de datos para cada certificación
const certifications = [
  {
    title: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    icon: <FaMicrosoft size="3em" />,
    url: "#", // Reemplaza con la URL de tu credencial
    color: "#0078D4" // El color del icono se mantiene
  },
  {
    title: "Google IT Automation with Python",
    issuer: "Coursera",
    icon: <SiCoursera size="3em" />,
    url: "#",
    color: "#0056D2"
  },
  {
    title: "Oracle Certified Associate, Java SE 8 Programmer",
    issuer: "Oracle",
    icon: <SiOracle size="3em" />,
    url: "#",
    color: "#F80000"
  },
  {
    title: "Otra Certificación Increíble",
    issuer: "Otra Institución",
    icon: <FaCertificate size="3em" />, // Icono genérico
    url: "#",
    color: "#319795"
  },
];

export const Certificaciones = () => {
  return (
    <Box
      as="section"
      id="certificaciones"
      minHeight="100vh"
      py="80px" // Aumentamos el padding vertical
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      px={8}
    >
      <VStack spacing={12} maxWidth="800px" width="100%">
        <Heading
          as="h2"
          size="2xl"
          color="brand.text"
          sx={{
            fontFamily: '"Space Grotesk", system-ui, sans-serif',
            fontWeight: '700',
          }}
        >
          My Certifications
        </Heading>

        {/* Cambiamos SimpleGrid por VStack para una sola columna */}
        <VStack spacing={6} width="100%">
          {certifications.map((cert, index) => (
            <Flex
              key={index}
              p={6}
              bg="rgba(1, 15, 24, 0.6)" // Usamos el mismo fondo del footer/contacto
              border="1px solid"
              borderColor="rgba(255, 255, 255, 0.1)"
              borderRadius="xl"
              align="center"
              transition="all 0.3s ease"
              width="100%"
              _hover={{
                transform: 'translateY(-5px)',
                // --- EFECTO DE HOVER ACTUALIZADO A VERDE ---
                borderColor: 'brand.primary',
                boxShadow: '0 8px 25px rgba(4, 165, 107, 0.2)',
              }}
            >
              <Box color={cert.color} mr={6}>
                {cert.icon}
              </Box>
              
              <VStack align="start" flex="1" spacing={1}>
                <Heading as="h4" size="md" color="brand.text">{cert.title}</Heading>
                <Text color="gray.400" fontSize="sm">Emitida por: {cert.issuer}</Text>
              </VStack>

              <Link href={cert.url} isExternal>
                <Icon 
                  as={FaExternalLinkAlt} 
                  color="gray.500"
                  boxSize={5}
                  transition="color 0.2s ease"
                  // El icono del link también cambia a verde al pasar el mouse
                  _hover={{ color: 'brand.primary' }}
                />
              </Link>
            </Flex>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};