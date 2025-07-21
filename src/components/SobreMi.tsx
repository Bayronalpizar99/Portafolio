import { Box, Heading, VStack, Text, Image, SimpleGrid } from "@chakra-ui/react";
import perfilImg from '../assets/perfil.jpeg';

// Nuevos iconos para las competencias clave
import { FaUsers, FaLightbulb, FaCode, FaSyncAlt } from "react-icons/fa";

export const SobreMi = () => {
  // Array para las nuevas competencias clave
  const competencias = [
    {
      icon: <FaUsers size="2.5em" />,
      title: "Trabajo en Equipo",
      description: "Colaboro de forma efectiva en equipos multidisciplinarios usando metodologías ágiles."
    },
    {
      icon: <FaLightbulb size="2.5em" />,
      title: "Resolución de Problemas",
      description: "Analizo y descompongo problemas complejos para encontrar soluciones eficientes y escalables."
    },
    {
      icon: <FaCode size="2.5em" />,
      title: "Código Limpio",
      description: "Escribo código legible, mantenible y bien documentado siguiendo las mejores prácticas."
    },
    {
      icon: <FaSyncAlt size="2.5em" />,
      title: "Aprendizaje Continuo",
      description: "Soy autodidacta y me mantengo siempre actualizado con las nuevas tecnologías del sector."
    }
  ];

  return (
    <Box
      as="section"
      id="sobre-mi"
      minHeight="100vh"
      pt="60px"
      pb="80px"
      px={8}
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <VStack spacing={12} maxWidth="900px" textAlign="center">
        <Heading
          as="h2"
          size="2xl"
          color="brand.text"
          sx={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontWeight: '700' }}
        >
          Sobre Mí
        </Heading>

        {/* Foto de Perfil */}
        <Box
          position="relative"
          display="inline-block"
          sx={{
            '&::before': {
              content: '""', position: 'absolute', top: '-6px', left: '-6px', right: '-6px', bottom: '-6px',
              borderRadius: '50%', background: 'linear-gradient(135deg, rgba(4,165,107,0.2), rgba(2,214,143,0.2))',
              animation: 'profileGlow 6s ease-in-out infinite', filter: 'blur(1.5px)', zIndex: -1,
            },
            '&::after': {
              content: '""', position: 'absolute', top: '-3px', left: '-3px', right: '-3px', bottom: '-3px',
              borderRadius: '50%', background: 'linear-gradient(135deg, rgba(4,165,107,0.1), rgba(2,214,143,0.1))',
              animation: 'profileGlow 6s ease-in-out infinite reverse', zIndex: -1,
            },
            '@keyframes profileGlow': { '0%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' }, '100%': { backgroundPosition: '0% 50%' } },
            transition: 'transform 0.3s ease', _hover: { transform: 'scale(1.03)' },
          }}
        >
          <Image
            src={perfilImg} alt="Foto de perfil" boxSize="200px" borderRadius="full" objectFit="cover"
            position="relative" zIndex={1} border="4px solid" borderColor="brand.background"
            boxShadow="0 0 12px rgba(4, 165, 107, 0.2)"
          />
        </Box>

        {/* Descripción */}
        <Text
          fontSize="lg" lineHeight="1.8" color="gray.300" textAlign="center" maxWidth="600px"
          sx={{ fontFamily: '"Inter", system-ui, sans-serif' }}
        >
          Soy un desarrollador apasionado por crear experiencias digitales excepcionales.
          Me especializo en el desarrollo full stack, combinando creatividad y tecnología
          para construir aplicaciones web modernas y eficientes.
        </Text>

        <VStack spacing={8} width="100%" pt={8}>
          <Heading
            as="h2"
            size="2xl"
            color="brand.text"
            sx={{
              fontFamily: '"Space Grotesk", system-ui, sans-serif',
              fontWeight: '700',
            }}
          >
            Competencias Clave
          </Heading>
          
          <SimpleGrid columns={[1, 2, 2]} spacing={6} width="100%">
            {competencias.map((comp, index) => (
              <VStack
                key={index}
                spacing={4}
                p={6}
                // --- COLOR DE FONDO RESTAURADO ---
                bg="rgba(67, 136, 162, 0.05)"
                border="1px solid"
                borderColor="rgba(67, 136, 162, 0.2)"
                borderRadius="xl"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-5px)',
                  // El fondo del hover sí puede ser un poco más verde
                  bg: 'rgba(4, 165, 107, 0.1)',
                  // Borde verde al pasar el mouse
                  borderColor: 'brand.primary',
                  // Sombra verde al pasar el mouse
                  boxShadow: '0 7px 20px rgba(4, 165, 107, 0.2)',
                }}
              >
                {/* Icono se mantiene en color verde */}
                <Box color="brand.primary">{comp.icon}</Box>
                <Heading as="h4" size="md" color="brand.text">{comp.title}</Heading>
                <Text color="gray.300" fontSize="sm" textAlign="center">{comp.description}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
    </Box>
  );
};