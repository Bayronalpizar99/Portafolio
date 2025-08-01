import { Box, Heading, VStack, SimpleGrid, Text } from "@chakra-ui/react";
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

const gentleFloat = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-4px) rotate(1deg); }
  66% { transform: translateY(-2px) rotate(-0.5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const subtlePulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(4, 165, 107, 0.1); }
  50% { box-shadow: 0 0 0 8px rgba(4, 165, 107, 0.05); }
  100% { box-shadow: 0 0 0 0 rgba(4, 165, 107, 0.1); }
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

const TechCard = ({ tech, index }: { tech: any, index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, 
  });

  const floatDuration = 2.5 + (index % 3) * 0.5; 
  const floatDelay = index * 150; 

  return (
    <VStack
      ref={ref}
      spacing={4}
      p={6}
      bg="rgba(4, 165, 107, 0.05)"
      border="1px solid"
      borderColor="rgba(4, 165, 107, 0.2)"
      borderRadius="xl"
      position="relative"
      overflow="hidden"
      transition="transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), 
                 background-color 0.2s ease,
                 border-color 0.2s ease,
                 box-shadow 0.25s ease"
      
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px) scale(1) rotate(0deg)' : 'translateY(30px) scale(0.8) rotate(-5deg)',
        transition: `opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 100}ms, 
                    transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 100}ms`,
      }}
      

      animation={`${gentleFloat} ${floatDuration}s ease-in-out ${floatDelay}ms infinite, ${subtlePulse} 4s ease-in-out infinite ${floatDelay + 1000}ms`}
      
      _hover={{
        transform: 'translateY(-8px) scale(1.08) rotate(2deg)',
        bg: 'rgba(4, 165, 107, 0.2)',
        borderColor: 'brand.primary',
        boxShadow: '0 12px 30px rgba(4, 165, 107, 0.4), 0 0 20px rgba(4, 165, 107, 0.2)',
        zIndex: 10,
        '&::before': {
          left: '100%',
        }
      }}
      
      _active={{
        transform: 'scale(0.95)',
        transition: 'transform 0.1s ease',
      }}
      
      cursor="pointer"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        transition: 'left 0.5s ease',
        zIndex: 1,
      }}
    >
      <Box 
        color="brand.primary" 
        fontSize="3.5rem"
        position="relative"
        zIndex={2}
        transition="transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
        sx={{
          'VStack:hover &': {
            transform: 'rotate(5deg) scale(1.1)',
          }
        }}
      >
        {tech.icon}
      </Box>
      
      <Text 
        fontWeight="bold"
        color="brand.text"
        position="relative"
        zIndex={2}
        fontSize="md"
      >
        {tech.name}
      </Text>
    </VStack>
  );
};

export const Tecnologias = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false, 
  });

  return (
    <Box
      as="section"
      id="tecnologias"
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
      <VStack
        spacing={12}
        maxWidth="900px"
        width="100%"
      >
        <Heading
          as="h2"
          size="2xl"
          color="brand.text"
          sx={{
            fontFamily: '"Space Grotesk", system-ui, sans-serif',
            fontWeight: '700',
          }}
          
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          My Top Technologies
        </Heading>

        <SimpleGrid columns={[2, 3, 4, 5]} spacing={8} width="100%">
          {technologies.map((tech, index) => (
            <TechCard key={index} tech={tech} index={index} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};