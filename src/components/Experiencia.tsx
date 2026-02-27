// src/components/Experiencia.tsx
import {
  Box,
  Heading,
  VStack,
  Text,
  Flex,
  Badge,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
  color: string;
}

const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "2023 – Present",
    type: "Freelance",
    description: [
      "Designed and developed full-stack web applications for clients across different industries.",
      "Built RESTful APIs with Node.js and integrated third-party services.",
      "Delivered responsive, accessible UIs using React and Chakra UI.",
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Chakra UI"],
    color: "#04a56b",
  },
  {
    role: "Frontend Developer",
    company: "Personal Projects",
    location: "Remote",
    period: "2022 – 2023",
    type: "Project",
    description: [
      "Built and deployed multiple personal projects focused on security tools and productivity apps.",
      "Implemented modern UI patterns with React and Vite.",
      "Focused on performance optimization and clean code practices.",
    ],
    technologies: ["React", "Vite", "Python", "CSS3", "Git"],
    color: "#4388a2",
  },
  {
    role: "Cybersecurity Analyst (Training)",
    company: "IBM SkillsBuild",
    location: "Online",
    period: "2022",
    type: "Training",
    description: [
      "Completed intensive IBM cybersecurity bootcamp covering offensive and defensive techniques.",
      "Practiced vulnerability assessment, network security, and incident response.",
      "Earned IBM Cybersecurity Fundamentals badge on Credly.",
    ],
    technologies: ["Linux", "Wireshark", "Nmap", "OWASP", "SIEM"],
    color: "#052FAD",
  },
];

// ─── Card individual ────────────────────────────────────────────────────────

const ExperienceCard = ({
  exp,
  index,
  isLast,
}: {
  exp: Experience;
  index: number;
  isLast: boolean;
}) => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: false });

  return (
    <Flex ref={ref} width="100%" align="flex-start" gap={0}>
      {/* ── Línea del timeline ── */}
      <Flex
        direction="column"
        align="center"
        mr={6}
        flexShrink={0}
        opacity={inView ? 1 : 0}
        transition={`opacity 0.5s ease ${index * 150}ms`}
      >
        {/* Punto */}
        <Box
          w="14px"
          h="14px"
          borderRadius="full"
          bg={exp.color}
          boxShadow={`0 0 12px ${exp.color}`}
          flexShrink={0}
          mt="4px"
        />
        {/* Línea vertical */}
        {!isLast && (
          <Box
            w="2px"
            flex="1"
            minH="60px"
            bg="rgba(255,255,255,0.08)"
            mt={2}
          />
        )}
      </Flex>

      {/* ── Tarjeta de contenido ── */}
      <Box
        flex="1"
        mb={isLast ? 0 : 10}
        p={6}
        bg="rgba(4, 165, 107, 0.04)"
        border="1px solid"
        borderColor="rgba(4, 165, 107, 0.1)"
        borderRadius="xl"
        opacity={inView ? 1 : 0}
        transform={inView ? "translateX(0)" : "translateX(30px)"}
        transition={`
          opacity 0.55s ease ${index * 150}ms,
          transform 0.55s ease ${index * 150}ms,
          border-color 0.25s ease,
          box-shadow 0.25s ease
        `}
        _hover={{
          borderColor: exp.color,
          boxShadow: `0 8px 28px ${exp.color}30`,
          transform: "translateY(-4px)",
        }}
      >
        {/* Encabezado */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          mb={3}
          gap={2}
        >
          <VStack align="flex-start" spacing={1}>
            <Heading
              as="h3"
              size="md"
              color="brand.text"
              sx={{ fontFamily: '"Space Grotesk", system-ui, sans-serif' }}
            >
              {exp.role}
            </Heading>
            <Text color={exp.color} fontWeight="600" fontSize="sm">
              {exp.company}
            </Text>
          </VStack>
          <Badge
            colorScheme="green"
            bg={`${exp.color}20`}
            color={exp.color}
            border="1px solid"
            borderColor={`${exp.color}40`}
            px={3}
            py={1}
            borderRadius="full"
            fontSize="xs"
            flexShrink={0}
          >
            {exp.type}
          </Badge>
        </Flex>

        {/* Meta: lugar y periodo */}
        <HStack spacing={4} mb={4} color="gray.500" fontSize="xs">
          <HStack spacing={1}>
            <Icon as={FaMapMarkerAlt} />
            <Text>{exp.location}</Text>
          </HStack>
          <HStack spacing={1}>
            <Icon as={FaCalendarAlt} />
            <Text>{exp.period}</Text>
          </HStack>
        </HStack>

        {/* Descripción */}
        <VStack align="flex-start" spacing={2} mb={5}>
          {exp.description.map((line, i) => (
            <Flex key={i} align="flex-start" gap={2}>
              <Box
                w="5px"
                h="5px"
                borderRadius="full"
                bg={exp.color}
                flexShrink={0}
                mt="7px"
              />
              <Text color="gray.400" fontSize="sm" lineHeight="1.7">
                {line}
              </Text>
            </Flex>
          ))}
        </VStack>

        {/* Tecnologías */}
        <Flex wrap="wrap" gap={2}>
          {exp.technologies.map((tech) => (
            <Badge
              key={tech}
              bg="rgba(255,255,255,0.05)"
              color="gray.300"
              border="1px solid rgba(255,255,255,0.1)"
              px={3}
              py={1}
              borderRadius="md"
              fontSize="xs"
              fontWeight="500"
              transition="all 0.2s"
              _hover={{
                bg: `${exp.color}20`,
                color: exp.color,
                borderColor: `${exp.color}50`,
              }}
            >
              {tech}
            </Badge>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

// ─── Sección principal ───────────────────────────────────────────────────────

export const Experiencia = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <Box
      as="section"
      id="experiencia"
      ref={ref}
      minHeight="100vh"
      py="80px"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      px={{ base: 4, md: 8 }}
    >
      <VStack spacing={12} maxWidth="800px" width="100%">
        {/* Título */}
        <VStack spacing={3} textAlign="center">
          <HStack spacing={3}>
            <Icon
              as={FaBriefcase}
              color="brand.primary"
              boxSize={6}
              opacity={inView ? 1 : 0}
              transform={inView ? "scale(1)" : "scale(0.5)"}
              transition="all 0.5s ease"
            />
            <Heading
              as="h2"
              size="2xl"
              color="brand.text"
              opacity={inView ? 1 : 0}
              transform={inView ? "translateY(0)" : "translateY(20px)"}
              transition="all 0.6s ease-out"
              sx={{
                fontFamily: '"Space Grotesk", system-ui, sans-serif',
                fontWeight: "700",
              }}
            >
              Experience
            </Heading>
          </HStack>
          <Text
            color="gray.500"
            fontSize="sm"
            maxW="480px"
            opacity={inView ? 1 : 0}
            transform={inView ? "translateY(0)" : "translateY(10px)"}
            transition="all 0.6s ease-out 0.15s"
          >
            My professional journey — roles, projects, and training that shaped
            who I am as a developer.
          </Text>
          {/* Línea decorativa */}
          <Box
            w={inView ? "60px" : "0px"}
            h="3px"
            bg="brand.primary"
            borderRadius="full"
            transition="width 0.8s ease 0.2s"
            boxShadow="0 0 10px #04a56b"
          />
        </VStack>

        {/* Timeline */}
        <VStack spacing={0} width="100%" align="flex-start">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              exp={exp}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};
