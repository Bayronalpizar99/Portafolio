import { Box, Heading, VStack, SimpleGrid, Text } from "@chakra-ui/react";
// Se importan los iconos necesarios, incluyendo el de Jira
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaJava,
  FaBootstrap,
  FaFigma,
  FaJira,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiSupabase,
  SiSharp, // <-- CORRECCIÓN: De SiCsharp a SiSharp
  SiChakraui,
} from "react-icons/si";

// Array de tecnologías actualizado con Jira en lugar de Windsurf
const technologies = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C#", icon: <SiSharp /> }, // <-- CORRECCIÓN: Usando el icono correcto
  { name: "Python", icon: <FaPython /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Chakra UI", icon: <SiChakraui /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Jira", icon: <FaJira /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export const Tecnologias = () => {
  return (
    <Box
      as="section"
      id="tecnologias"
      minHeight="100vh"
      pt="80px"
      pb="80px"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      px={8}
    >
      <VStack spacing={12} maxWidth="900px" width="100%">
        <Heading
          as="h2"
          size="2xl"
          color="brand.text"
          sx={{
            fontFamily: '"Space Grotesk", system-ui, sans-serif',
            fontWeight: '700',
          }}
        >
          Tecnologías que Domino
        </Heading>

        <SimpleGrid columns={[2, 3, 4, 5]} spacing={8} width="100%">
          {technologies.map((tech, index) => (
            <VStack
              key={index}
              spacing={4}
              p={6}
              bg="rgba(4, 165, 107, 0.05)"
              border="1px solid"
              borderColor="rgba(4, 165, 107, 0.2)"
              borderRadius="xl"
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-5px)',
                bg: 'rgba(4, 165, 107, 0.15)',
                borderColor: 'brand.primary',
                boxShadow: '0 7px 20px rgba(4, 165, 107, 0.3)',
              }}
            >
              <Box color="brand.primary" fontSize="3.5rem">{tech.icon}</Box>
              <Text fontWeight="medium" color="brand.text">{tech.name}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};