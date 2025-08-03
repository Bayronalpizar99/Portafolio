import { Box, Heading, VStack, SimpleGrid, Text, Tag, HStack, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

// Importar las imágenes
import posSystemImg from '../assets/pos.webp';
import greenHouseImg from '../assets/green.webp';
import miniCSharpImg from '../assets/mini.webp';
import tankAttackImg from '../assets/tank.webp';
import realTimeStadiumImg from '../assets/real.webp';
import laGaletaImg from '../assets/galeta.webp';

const projects = [
  {
    title: "POS System",
    description: "Full-stack application for distributors with customer, inventory, product, billing, and reporting management. Secure authentication, analytical dashboard, business validation, and scalable architecture.",
    image: posSystemImg,
    tags: ["React", "Bootstrap", "FastAPI", "Supabase"],
    liveUrl: null, 
    repoUrl: "https://github.com/Bayronalpizar99/Pos_system.git",
  },
  {
    title: "Green View House",
    description: "Modern website for rural lodging with a functional booking form, WhatsApp integration, interactive image gallery, location maps, and a complete internationalization system. Responsive design with fluid animations.",
    image: greenHouseImg,
    tags: ["React", "TypeScript", "Chakra UI"],
    liveUrl: "https://www.vistaverdezarcero.com/", // Se mantiene para el futuro
    repoUrl: "https://github.com/Bayronalpizar99/Casa_Vista_Verde.git",
  },
  {
    title: "Mini-C#",
    description: "Complete compiler for a C# subset developed with ANTLR4. Implements advanced semantic analysis, a symbol table with nested scopes, a robust type system, compile-time error validation, and support for modules.",
    image: miniCSharpImg,
    tags: ["C#", "ANTLR4", "Rider"],
    liveUrl: null, 
    repoUrl: "https://github.com/Bayronalpizar99/compiladores.git",
  },
  {
    title: "Tank-Attack-Game",
    description: "AI Tank Game - Pathfinding DFS 2D Python/Pygame video game that integrates pathfinding algorithms in Haskell. Enemy AI uses DFS for intelligent navigation, interprocess communication, collision detection, a health system, and rich gameplay mechanics.",
    image: tankAttackImg,
    tags: ["Python", "Haskell", "Pygame "],
    liveUrl: null, 
    repoUrl: "https://github.com/Bayronalpizar99/Tank-Attack-Game.git",
  },
  {
    title: "Real-Time Stadium Reservation System",
    description: "Full-stack application with webSockets for real-time synchronization, extensible payment system with Strategy pattern, time-based reservations with automatic timers, and intelligent seat allocation algorithms.",
    image: realTimeStadiumImg,
    tags: ["Python", "Rust", "PyQt5"],
    liveUrl: null, 
    repoUrl: "https://github.com/Bayronalpizar99/CuartoLenguajes-POO-.git",
  },
  {
    title: "La Galeta De Chizo",
    description: "Full-featured digital DJ console with dual decks, crossfader, and advanced audio controls. Features real-time waveform visualization, automatic BPM detection, virtual scratching, cue point management, and synchronized global waveform view with zoom functionality.",
    image: laGaletaImg,
    tags: ["React", "JavaScript", "Chakra UI", "WaveSurfer.js"],
    liveUrl: "#", // Se mantiene para el futuro
    repoUrl: "https://github.com/Bayronalpizar99/DJ_Mixer.git",
  },
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      bg="rgba(67, 136, 162, 0.05)"
      border="1px solid"
      borderColor="rgba(67, 136, 162, 0.1)"
      borderRadius="xl"
      overflow="hidden"
      opacity={inView ? 1 : 0}
      transform={inView ? 'translateY(0)' : 'translateY(30px)'}
      transition={`all 0.3s ease-in-out, opacity 0.6s ease-in-out ${index * 150}ms, transform 0.6s ease-in-out ${index * 150}ms`}
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
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease-in-out',
          zIndex: 1,
        }}
        _hover={{
          _before: {
            bg: 'rgba(0, 0, 0, 0.1)',
          },
          '& > div': {
            transform: 'scale(1.05)'
          }
        }}
      >
        <Box
          height="100%"
          width="100%"
          bgImage={`url(${project.image})`}
          bgSize="cover"
          bgPosition="center"
          transition="transform 0.3s ease-in-out"
        />
      </Box>
      <VStack p={6} align="start" spacing={4}>
        <Heading as="h3" size="md" color="brand.text">{project.title}</Heading>
        <Text color="gray.300" fontSize="sm">{project.description}</Text>
        <HStack wrap="wrap" spacing={2}>
          {project.tags.map((tag: string) => (
            <Tag key={tag} size="sm" bg="brand.primary" color="white" borderRadius="full">
              {tag}
            </Tag>
          ))}
        </HStack>
        <HStack spacing={4} width="100%" justify="flex-end" pt={4}>
          {/* Renderizado condicional del botón Demo */}
          {project.liveUrl && (
            <Link href={project.liveUrl} isExternal _hover={{ color: 'brand.primary' }}>
              <HStack>
                <Icon as={FaExternalLinkAlt} />
                <Text>Demo</Text>
              </HStack>
            </Link>
          )}
          <Link href={project.repoUrl} isExternal _hover={{ color: 'brand.primary' }}>
            <HStack>
              <Icon as={FaGithub} />
              <Text>Code</Text>
            </HStack>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export const Proyectos = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <Box
      as="section"
      id="proyectos"
      ref={ref}
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
          opacity={inView ? 1 : 0}
          transform={inView ? 'translateY(0)' : 'translateY(20px)'}
          transition="opacity 0.6s ease-out, transform 0.6s ease-out"
          sx={{
            fontFamily: '"Space Grotesk", system-ui, sans-serif',
            fontWeight: '700',
          }}
        >
          My Projects
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} width="100%">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};