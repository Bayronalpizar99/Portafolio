import { Box, Heading, VStack, SimpleGrid, Text, HStack, Link, Icon, Flex } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

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
    liveUrl: "https://www.vistaverdezarcero.com/",
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
    liveUrl: "#",
    repoUrl: "https://github.com/Bayronalpizar99/DJ_Mixer.git",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <Box
      ref={ref}
      position="relative"
      borderRadius="2xl"
      overflow="hidden"
      bg="rgba(1, 15, 24, 0.6)"
      border="1px solid rgba(4, 165, 107, 0.06)"
      role="group"
      opacity={inView ? 1 : 0}
      transform={inView ? 'translateY(0)' : 'translateY(32px)'}
      transition={`
        opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms,
        transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms,
        border-color 0.3s ease,
        box-shadow 0.3s ease
      `}
      _hover={{
        borderColor: 'rgba(4, 165, 107, 0.2)',
        boxShadow: '0 20px 50px -15px rgba(4, 165, 107, 0.15), 0 0 0 1px rgba(4, 165, 107, 0.08)',
      }}
    >
      {/* Image Section */}
      <Box
        position="relative"
        height="220px"
        overflow="hidden"
      >
        <Box
          height="100%"
          width="100%"
          bgImage={`url(${project.image})`}
          bgSize="cover"
          bgPosition="center"
          transition="transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
          _groupHover={{
            transform: 'scale(1.06)',
          }}
        />
        {/* Gradient overlay */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          height="60%"
          bgGradient="linear(to-t, rgba(1, 15, 24, 0.95), transparent)"
          pointerEvents="none"
        />
        {/* Floating action links on hover */}
        <Flex
          position="absolute"
          top={4}
          right={4}
          gap={2}
          opacity={0}
          transform="translateY(-8px)"
          transition="all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
          _groupHover={{
            opacity: 1,
            transform: 'translateY(0)',
          }}
        >
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              isExternal
              bg="rgba(4, 165, 107, 0.85)"
              color="white"
              px={3}
              py={1.5}
              borderRadius="full"
              fontSize="xs"
              fontWeight="600"
              fontFamily='"Space Grotesk", sans-serif'
              display="flex"
              alignItems="center"
              gap={1.5}
              _hover={{
                bg: "#04a56b",
                textDecoration: 'none',
                transform: 'translateY(-1px)',
              }}
              transition="all 0.2s ease"
              sx={{ backdropFilter: 'blur(8px)' }}
            >
              <Icon as={FaExternalLinkAlt} fontSize="10px" />
              Demo
            </Link>
          )}
          <Link
            href={project.repoUrl}
            isExternal
            bg="rgba(255, 255, 255, 0.1)"
            color="white"
            px={3}
            py={1.5}
            borderRadius="full"
            fontSize="xs"
            fontWeight="600"
            fontFamily='"Space Grotesk", sans-serif'
            display="flex"
            alignItems="center"
            gap={1.5}
            _hover={{
              bg: "rgba(255, 255, 255, 0.2)",
              textDecoration: 'none',
              transform: 'translateY(-1px)',
            }}
            transition="all 0.2s ease"
            sx={{ backdropFilter: 'blur(8px)' }}
          >
            <Icon as={FaGithub} fontSize="12px" />
            Code
          </Link>
        </Flex>
        {/* Title overlaid on bottom of image */}
        <Box position="absolute" bottom={0} left={0} right={0} px={6} pb={4}>
          <Heading
            as="h3"
            fontSize="lg"
            color="white"
            fontFamily='"Syne", "Space Grotesk", sans-serif'
            fontWeight="700"
            letterSpacing="-0.2px"
          >
            {project.title}
          </Heading>
        </Box>
      </Box>

      {/* Content Section */}
      <VStack px={6} pt={4} pb={6} align="start" spacing={4}>
        <Text
          color="gray.500"
          fontSize="sm"
          lineHeight="1.7"
          noOfLines={3}
          fontFamily='"Space Grotesk", sans-serif'
        >
          {project.description}
        </Text>

        {/* Tags */}
        <HStack wrap="wrap" gap={2}>
          {project.tags.map((tag: string) => (
            <Text
              key={tag}
              fontSize="xs"
              fontFamily='"Space Grotesk", sans-serif'
              fontWeight="500"
              color="#04a56b"
              bg="rgba(4, 165, 107, 0.08)"
              px={3}
              py={1}
              borderRadius="full"
              letterSpacing="0.3px"
            >
              {tag}
            </Text>
          ))}
        </HStack>

        {/* Bottom row link */}
        <Flex width="100%" justify="flex-end" pt={1}>
          <Link
            href={project.repoUrl}
            isExternal
            display="inline-flex"
            alignItems="center"
            gap={2}
            fontSize="xs"
            fontFamily='"Space Grotesk", sans-serif'
            fontWeight="600"
            color="gray.500"
            _hover={{ color: "#04a56b", textDecoration: "none" }}
            transition="color 0.2s ease"
            role="group"
          >
            View project
            <Icon
              as={FaArrowRight}
              fontSize="10px"
              transition="transform 0.2s ease"
              _groupHover={{ transform: "translateX(3px)" }}
            />
          </Link>
        </Flex>
      </VStack>
    </Box>
  );
};

export const Proyectos = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

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
      px={{ base: 6, md: 8 }}
    >
      <VStack spacing={14} maxWidth="1200px" width="100%">
        <VStack spacing={3}>
          <Text
            fontSize="sm"
            fontFamily='"Space Grotesk", sans-serif'
            fontWeight="500"
            color="#04a56b"
            letterSpacing="3px"
            textTransform="uppercase"
            opacity={inView ? 1 : 0}
            transform={inView ? 'translateY(0)' : 'translateY(12px)'}
            transition="all 0.5s ease-out"
          >
            Portfolio
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            color="brand.text"
            opacity={inView ? 1 : 0}
            transform={inView ? 'translateY(0)' : 'translateY(20px)'}
            transition="all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s"
            sx={{
              fontFamily: '"Syne", "Space Grotesk", sans-serif',
              fontWeight: '700',
            }}
          >
            My Projects
          </Heading>
          <Box
            w={inView ? "40px" : "0px"}
            h="2px"
            bg="brand.primary"
            borderRadius="full"
            transition="width 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s"
            boxShadow="0 0 8px rgba(4, 165, 107, 0.4)"
          />
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={7} width="100%">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
