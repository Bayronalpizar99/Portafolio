// src/components/Certificaciones.tsx
import { Box, Heading, VStack, Text, Link, Icon, Flex } from "@chakra-ui/react";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { useInView } from "react-intersection-observer";

// Datos de las certificaciones
const certifications = [
  {
    title: "Cybersecurity Bootcamp IBM SkillsBuild",
    issuer: "IBM",
    icon: <FaAward size="3em" />,
    url: "https://drive.google.com/file/d/1VJGn0yYt0o9lkSpyarTlJVu5a3wa3Zhb/view?usp=sharing",
    color: "#052FAD" // IBM Blue
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    icon: <FaAward size="3em" />,
    url: "https://www.credly.com/badges/2f1f2061-29b3-4907-a7a3-2c431debbeb0/linked_in_profile",
    color: "#052FAD" // IBM Blue
  },
  {
    title: "Introduction to Cyber Attacks",
    issuer: "Coursera",
    icon: <SiCoursera size="3em" />,
    url: "https://coursera.org/share/922ae670bcb4687092b986b5b5a2a426",
    color: "#0056D2"
  },
  {
    title: "Complete Defensive Cybersecurity Course",
    issuer: "Udemy",
    icon: <SiUdemy size="3em" />,
    url: "https://drive.google.com/file/d/19hWFc41CgkRQHB_SkXagX3ur2YuCI9eG/view?usp=sharing",
    color: "#A435F0" // Udemy Purple
  },
];

// Componente individual para cada tarjeta
const CertificationCard = ({ cert, index }: { cert: any, index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <Flex
      ref={ref}
      p={6}
      bg="rgba(67, 136, 162, 0.05)"
      border="1px solid"
      borderColor="rgba(67, 136, 162, 0.1)"
      borderRadius="xl"
      align="center"
      width="100%"
      opacity={inView ? 1 : 0}
      transform={inView ? 'translateX(0)' : 'translateX(-30px)'}
      transition={`
        opacity 0.5s ease-in-out ${index * 150}ms,
        transform 0.5s ease-in-out ${index * 150}ms,
        border-color 0.25s ease-in-out,
        box-shadow 0.25s ease-in-out
      `}
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '0 10px 30px rgba(4, 165, 107, 0.2)',
        borderColor: 'brand.primary',
      }}
    >
      <Box color={cert.color} mr={6}>
        {cert.icon}
      </Box>

      <VStack align="start" flex="1" spacing={1}>
        <Heading as="h4" size="md" color="brand.text">{cert.title}</Heading>
        <Text color="gray.400" fontSize="sm">Issued by: {cert.issuer}</Text>
      </VStack>

      <Link href={cert.url} isExternal>
        <Icon
          as={FaExternalLinkAlt}
          color="gray.500"
          boxSize={5}
          transition="color 0.2s ease"
          _hover={{ color: 'brand.primary' }}
        />
      </Link>
    </Flex>
  );
};

export const Certificaciones = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <Box
      as="section"
      id="certificaciones"
      ref={ref}
      minHeight="100vh"
      py="80px"
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
          opacity={inView ? 1 : 0}
          transform={inView ? 'translateY(0)' : 'translateY(20px)'}
          transition="all 0.6s ease-out"
          sx={{
            fontFamily: '"Space Grotesk", system-ui, sans-serif',
            fontWeight: '700',
          }}
        >
          My Certifications
        </Heading>

        <VStack spacing={6} width="100%">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};