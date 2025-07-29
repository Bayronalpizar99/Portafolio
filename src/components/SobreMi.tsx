import { Box, Heading, VStack, Text, Image, SimpleGrid, Button, Icon } from "@chakra-ui/react";
import perfilImg from '../assets/perfil.jpeg';
import { FaUsers, FaLightbulb, FaCode, FaSyncAlt, FaDownload } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';

export const SobreMi = () => {
  const competencies = [
    {
      icon: <FaUsers size="2.5em" />,
      title: "Teamwork",
      description: "I collaborate effectively in multidisciplinary teams using agile methodologies."
    },
    {
      icon: <FaLightbulb size="2.5em" />,
      title: "Problem Solving",
      description: "I analyze and break down complex problems to find efficient and scalable solutions."
    },
    {
      icon: <FaCode size="2.5em" />,
      title: "Clean Code",
      description: "I implement readable, maintainable, and well-documented code following best practices."
    },
    {
      icon: <FaSyncAlt size="2.5em" />,
      title: "Continuous Learning",
      description: "I am a self-learner and I constantly keep myself updated with the new technologies in the industry."
    }
  ];

  const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.5 });
  const { ref: imageRef, inView: imageInView } = useInView({ threshold: 0.5 });
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.4 });
  const { ref: competenciesRef, inView: competenciesInView } = useInView({ threshold: 0.2 });
  const { ref: buttonRef, inView: buttonInView } = useInView({ threshold: 0.3 });

  const createFadeInStyle = (inView: boolean, delay: string = '0s') => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.6s ease-out ${delay}, transform 0.6s ease-out ${delay}`
  });

  const handleResumeClick = () => {
    const resumeUrl = "https://drive.google.com/file/d/TU_ID_DEL_ARCHIVO/view?usp=sharing";
    window.open(resumeUrl, '_blank');
  };

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
          ref={headingRef}
          as="h2"
          size="2xl"
          color="brand.text"
          sx={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontWeight: '700' }}
          style={createFadeInStyle(headingInView)}
        >
          About Me
        </Heading>

        <Box
          ref={imageRef}
          position="relative"
          display="inline-block"
          sx={{
            ...createFadeInStyle(imageInView, '0.2s'),
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
            src={perfilImg} alt="Profile picture" boxSize="200px" borderRadius="full" objectFit="cover"
            position="relative" zIndex={1} border="4px solid" borderColor="brand.background"
            boxShadow="0 0 12px rgba(4, 165, 107, 0.2)"
          />
        </Box>

        <Text
          ref={textRef}
          fontSize="lg" lineHeight="1.8" color="gray.300" textAlign="center" maxWidth="600px"
          sx={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          style={createFadeInStyle(textInView, '0.4s')}
        >
          Full-stack developer passionate about building innovative and high-performance web applications. I integrate AI-based tools into my workflow to speed up development and explore new ways to deliver smarter and more scalable solutions.
        </Text>

        <VStack ref={competenciesRef} spacing={8} width="100%" pt={8}>
          <Heading
            as="h2"
            size="2xl"
            color="brand.text"
            sx={{
              fontFamily: '"Space Grotesk", system-ui, sans-serif',
              fontWeight: '700',
            }}
            style={createFadeInStyle(competenciesInView)}
          >
            Core Competencies
          </Heading>
          
          <SimpleGrid columns={[1, 2, 2]} spacing={6} width="100%">
            {competencies.map((comp, index) => (
              <VStack
                key={index}
                spacing={4}
                p={6}
                bg="rgba(67, 136, 162, 0.05)"
                border="1px solid"
                borderColor="rgba(67, 136, 162, 0.2)"
                borderRadius="xl"
                style={createFadeInStyle(competenciesInView, `${0.2 + index * 0.15}s`)}
                _hover={{
                  transform: 'translateY(-5px)',
                  bg: 'rgba(4, 165, 107, 0.1)',
                  borderColor: 'brand.primary',
                  boxShadow: '0 7px 20px rgba(4, 165, 107, 0.2)',
                }}
              >
                <Box color="brand.primary">{comp.icon}</Box>
                <Heading as="h4" size="md" color="brand.text">{comp.title}</Heading>
                <Text color="gray.300" fontSize="sm" textAlign="center">{comp.description}</Text>
              </VStack>
            ))}
          </SimpleGrid>

          {/* Botón del curriculum */}
          <Box 
            ref={buttonRef}
            pt={6}
            style={createFadeInStyle(buttonInView, '0.8s')}
          >
            <Button
              onClick={handleResumeClick}
              size="lg"
              px={8}
              py={6}
              bg="rgba(67, 136, 162, 0.05)"
              border="2px solid"
              borderColor="rgba(67, 136, 162, 0.3)"
              color="brand.text"
              borderRadius="xl"
              fontWeight="600"
              fontSize="md"
              leftIcon={<Icon as={FaDownload} />}
              transition="all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
              _hover={{
                transform: 'translateY(-3px) scale(1.05)',
                bg: 'rgba(4, 165, 107, 0.1)',
                borderColor: 'brand.primary',
                boxShadow: '0 8px 25px rgba(4, 165, 107, 0.3)',
                color: 'white'
              }}
              _active={{
                transform: 'translateY(-1px) scale(1.02)',
              }}
              sx={{
                fontFamily: '"Space Grotesk", system-ui, sans-serif',
              }}
            >
              View my resume
            </Button>
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
};