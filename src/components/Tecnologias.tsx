import { Box, Heading, VStack, SimpleGrid, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useInView } from "react-intersection-observer";
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaJava,
  FaBootstrap, 
  FaCss3,
  FaHtml5,
} from "react-icons/fa";
import {
  SiTypescript, SiJavascript, SiPostgresql, 
  SiSharp, SiChakraui,
  SiMysql,
} from "react-icons/si";

const gentleFloat = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const iconPop = keyframes`
  0%   { transform: scale(1) rotate(0deg); }
  40%  { transform: scale(1.15) rotate(-6deg); }
  70%  { transform: scale(1.1)  rotate(4deg); }
  100% { transform: scale(1)   rotate(0deg); }
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
  { name: "Mysql", icon: <SiMysql /> },
  { name: "Chakra UI", icon: <SiChakraui /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "HTLM", icon: <FaHtml5 /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const TechCard = ({ tech, index }: { tech: any, index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, 
  });

  const floatDuration = 3 + (index % 3) * 0.6;
  const floatDelay = (index * 200) % 1200;

  return (
    <VStack
      ref={ref}
      spacing={4}
      p={6}
      bg="rgba(4, 165, 107, 0.05)"
      border="1px solid"
      borderColor="rgba(4, 165, 107, 0.15)"
      borderRadius="xl"
      position="relative"
      cursor="pointer"
      role="group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px) scale(1)' : 'translateY(28px) scale(0.85)',
        transition: `opacity 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 90}ms,
                     transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 90}ms`,
      }}
      animation={`${gentleFloat} ${floatDuration}s ease-in-out ${floatDelay}ms infinite`}
      transition="border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease"
      _hover={{
        bg: 'rgba(4, 165, 107, 0.12)',
        borderColor: 'brand.primary',
        boxShadow: '0 8px 24px rgba(4, 165, 107, 0.25)',
        animation: 'none',
        transform: 'translateY(-6px) scale(1.06)',
      }}
      _active={{
        transform: 'scale(0.97)',
      }}
    >
      <Box
        color="brand.primary"
        fontSize="3.5rem"
        _groupHover={{
          animation: `${iconPop} 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
        }}
      >
        {tech.icon}
      </Box>

      <Text
        fontWeight="bold"
        color="brand.text"
        fontSize="md"
        transition="color 0.2s ease"
        _groupHover={{ color: 'brand.primary' }}
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