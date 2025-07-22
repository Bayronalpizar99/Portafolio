// src/components/Tecnologias.tsx
import { Box, Heading, VStack, SimpleGrid, Text } from "@chakra-ui/react";
// ✅ 1. Importamos las herramientas necesarias para las animaciones
import { keyframes } from "@emotion/react";
import { useInView } from "react-intersection-observer";
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaJava,
  FaBootstrap, FaFigma, FaJira,
} from "react-icons/fa";
import {
  SiTypescript, SiJavascript, SiPostgresql, SiSupabase,
  SiSharp, SiChakraui,
} from "react-icons/si";

// Animación de flotación que ya teníamos
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const technologies = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C#", icon: <SiSharp /> },
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
  // ✅ 2. Hook para detectar cuando la sección está visible
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se dispara solo una vez
    threshold: 0.1,    // Se activa cuando el 10% de la sección es visible
  });

  return (
    <Box
      as="section"
      id="tecnologias"
      ref={ref} // ✅ 3. Asignamos la referencia a la sección
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
      <VStack
        spacing={12}
        maxWidth="900px"
        width="100%"
        // ✅ 4. Aplicamos el efecto de aparición a todo el contenido
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        <Heading
          as="h2"
          size="2xl"
          color="brand.text"
          sx={{
            fontFamily: '"Space Grotesk", system-ui, sans-serif',
            fontWeight: '700',
          }}
        >
          {/* Título traducido para consistencia */}
          My top technologies
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
                transform: 'translateY(-5px) scale(1.05)',
                bg: 'rgba(4, 165, 107, 0.15)',
                borderColor: 'brand.primary',
                boxShadow: '0 7px 20px rgba(4, 165, 107, 0.3)',
              }}
              // Mantenemos la animación de flotación constante
              animation={`${float} 3s ease-in-out infinite`}
              // El retraso de la animación de flotación ahora da un efecto más orgánico
              style={{ animationDelay: `${index * 100}ms` }}
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