import { Box, Heading, VStack, SimpleGrid, Text, Tag, HStack, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Se añaden 3 nuevos proyectos a la estructura de datos
const projects = [
  {
    title: "Nombre de tu Proyecto 1",
    description: "Una breve pero impactante descripción de lo que hace tu proyecto, el problema que resuelve y su propósito principal.",
    image: "https://picsum.photos/seed/project1/400/300", // Reemplaza con la ruta a tu imagen
    tags: ["React", "Chakra UI", "TypeScript"],
    liveUrl: "#", // Reemplaza con la URL del demo en vivo
    repoUrl: "#", // Reemplaza con la URL del repositorio
  },
  {
    title: "Nombre de tu Proyecto 2",
    description: "Aquí va la descripción del segundo proyecto. Destaca las características más importantes o los desafíos técnicos que superaste.",
    image: "https://picsum.photos/seed/project2/400/300",
    tags: ["Node.js", "PostgreSQL", "Docker"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Nombre de tu Proyecto 3",
    description: "Este es el tercer proyecto. Puedes hablar sobre la API que construiste, la base de datos que diseñaste o la interfaz que creaste.",
    image: "https://picsum.photos/seed/project3/400/300",
    tags: ["Python", "Figma", "Java"],
    liveUrl: "#",
    repoUrl: "#",
  },
  // --- NUEVOS PROYECTOS ---
  {
    title: "Nombre de tu Proyecto 4",
    description: "Descripción del cuarto proyecto, enfocado quizás en el backend, una API REST o una base de datos específica que hayas manejado.",
    image: "https://picsum.photos/seed/project4/400/300",
    tags: ["Java", "Spring Boot", "Supabase"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Nombre de tu Proyecto 5",
    description: "Quinto proyecto. Puede ser una aplicación full-stack que demuestre tu versatilidad y conocimiento en diferentes áreas.",
    image: "https://picsum.photos/seed/project5/400/300",
    tags: ["C#", ".NET", "React"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Nombre de tu Proyecto 6",
    description: "Último proyecto destacado. Ideal para mostrar una habilidad específica como diseño de UI/UX con Figma o el uso de una librería como Bootstrap.",
    image: "https://picsum.photos/seed/project6/400/300",
    tags: ["HTML", "CSS", "Bootstrap", "Figma"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const Proyectos = () => {
  return (
    <Box
      as="section"
      id="proyectos"
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
      <VStack spacing={12} maxWidth="1200px" width="100%">
        <Heading
          as="h2"
          size="2xl"
          color="brand.text"
          sx={{
            fontFamily: '"Space Grotesk", system-ui, sans-serif',
            fontWeight: '700',
          }}
        >
          Mis Proyectos
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} width="100%">
          {projects.map((project, index) => (
            <Box
              key={index}
              bg="rgba(67, 136, 162, 0.05)"
              border="1px solid"
              borderColor="rgba(67, 136, 162, 0.1)"
              borderRadius="xl"
              overflow="hidden"
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '0 10px 30px rgba(4, 165, 107, 0.2)',
                borderColor: 'brand.primary',
              }}
            >
              <Box 
                height="200px" 
                bgImage={`url(${project.image})`}
                bgSize="cover"
                bgPosition="center"
              />
              <VStack p={6} align="start" spacing={4}>
                <Heading as="h3" size="md" color="brand.text">{project.title}</Heading>
                <Text color="gray.300" fontSize="sm">{project.description}</Text>
                
                <HStack wrap="wrap" spacing={2}>
                  {project.tags.map(tag => (
                    <Tag key={tag} size="sm" bg="brand.primary" color="white" borderRadius="full">
                      {tag}
                    </Tag>
                  ))}
                </HStack>

                <HStack spacing={4} width="100%" justify="flex-end" pt={4}>
                  <Link href={project.liveUrl} isExternal _hover={{ color: 'brand.primary' }}>
                    <HStack>
                      <Icon as={FaExternalLinkAlt} />
                      <Text>Demo</Text>
                    </HStack>
                  </Link>
                  <Link href={project.repoUrl} isExternal _hover={{ color: 'brand.primary' }}>
                    <HStack>
                      <Icon as={FaGithub} />
                      <Text>Código</Text>
                    </HStack>
                  </Link>
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};