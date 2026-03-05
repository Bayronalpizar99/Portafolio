import { Box, Heading, VStack, Text, Image, SimpleGrid, Icon, Link, Flex, HStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import perfilImg from '../assets/perfil.jpeg';
import { FaUsers, FaLightbulb, FaCode, FaSyncAlt, FaDownload, FaArrowRight } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const orbitGlow = keyframes`
  0% { box-shadow: 0 0 20px rgba(4, 165, 107, 0.15), inset 0 0 20px rgba(4, 165, 107, 0.05); }
  50% { box-shadow: 0 0 40px rgba(4, 165, 107, 0.25), inset 0 0 30px rgba(4, 165, 107, 0.08); }
  100% { box-shadow: 0 0 20px rgba(4, 165, 107, 0.15), inset 0 0 20px rgba(4, 165, 107, 0.05); }
`;

const subtlePulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.7; }
`;

export const SobreMi = () => {
  const competencies = [
    {
      icon: <FaUsers />,
      title: "Teamwork",
      description: "I collaborate effectively in multidisciplinary teams using agile methodologies."
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description: "I analyze and break down complex problems to find efficient and scalable solutions."
    },
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "I implement readable, maintainable, and well-documented code following best practices."
    },
    {
      icon: <FaSyncAlt />,
      title: "Continuous Learning",
      description: "I am a self-learner and I constantly keep myself updated with the new technologies in the industry."
    }
  ];

  const [animations, setAnimations] = useState({
    heading: false,
    image: false,
    text: false,
    competencies: false,
    button: false
  });

  const [imageHasBeenVisible, setImageHasBeenVisible] = useState(false);
  const [imageGlowActive, setImageGlowActive] = useState(false);

  const intersectionConfig = {
    threshold: 0.3,
    triggerOnce: false,
    rootMargin: '-20px 0px'
  };

  const { ref: headingRef, inView: headingInView } = useInView(intersectionConfig);
  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
    rootMargin: '-10px 0px'
  });
  const { ref: textRef, inView: textInView } = useInView(intersectionConfig);
  const { ref: competenciesRef, inView: competenciesInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '-50px 0px'
  });
  const { ref: buttonRef, inView: buttonInView } = useInView(intersectionConfig);

  useEffect(() => {
    setAnimations(prev => ({ ...prev, heading: headingInView }));
  }, [headingInView]);

  useEffect(() => {
    setAnimations(prev => ({ ...prev, text: textInView }));
  }, [textInView]);

  useEffect(() => {
    setAnimations(prev => ({ ...prev, competencies: competenciesInView }));
  }, [competenciesInView]);

  useEffect(() => {
    setAnimations(prev => ({ ...prev, button: buttonInView }));
  }, [buttonInView]);

  useEffect(() => {
    if (imageInView) {
      setAnimations(prev => ({ ...prev, image: true }));
      setImageGlowActive(true);
      if (!imageHasBeenVisible) {
        setImageHasBeenVisible(true);
      }
    } else {
      if (imageHasBeenVisible) {
        setAnimations(prev => ({ ...prev, image: true }));
        setImageGlowActive(false);
      } else {
        setAnimations(prev => ({ ...prev, image: false }));
        setImageGlowActive(false);
      }
    }
  }, [imageInView, imageHasBeenVisible]);

  const createFadeIn = (show: boolean, delay = '0s') => ({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`
  });

  const createImageStyle = (show: boolean, delay = '0s') => ({
    opacity: show ? 1 : (imageHasBeenVisible ? 1 : 0),
    transform: show ? 'translateY(0)' : (imageHasBeenVisible ? 'translateY(0)' : 'translateY(20px)'),
    transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`
  });

  return (
    <Box
      as="section"
      id="sobre-mi"
      minHeight="100vh"
      pt={{ base: "60px", md: "80px" }}
      pb="100px"
      px={{ base: 6, md: 10 }}
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <VStack spacing={0} maxWidth="1000px" width="100%">

        {/* Hero Area — asymmetric layout */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 10, md: 16 }}
          width="100%"
          mb={20}
        >
          {/* Left: Text */}
          <VStack
            align={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
            spacing={6}
            flex="1"
          >
            <Box ref={headingRef} style={createFadeIn(animations.heading)}>
              <Text
                fontSize="sm"
                fontFamily='"Space Grotesk", sans-serif'
                fontWeight="500"
                color="#04a56b"
                letterSpacing="3px"
                textTransform="uppercase"
                mb={3}
              >
                Full-Stack Developer
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                color="brand.text"
                lineHeight="1.05"
                sx={{
                  fontFamily: '"Syne", "Space Grotesk", sans-serif',
                  fontWeight: '800',
                }}
              >
                About
                <br />
                <Text
                  as="span"
                  bgGradient="linear(135deg, #04a56b 0%, #4388a2 50%, #05c280 100%)"
                  bgClip="text"
                >
                  Me
                </Text>
              </Heading>
            </Box>

            <Text
              ref={textRef}
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.9"
              color="gray.400"
              maxWidth="480px"
              sx={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontWeight: '400' }}
              style={createFadeIn(animations.text, '0.2s')}
            >
              Full-stack developer passionate about building innovative, high-performance web applications. I enjoy exploring new technologies by working on projects to master tools that allow me to build amazing websites.
            </Text>

            <Box
              ref={buttonRef}
              pt={2}
              style={createFadeIn(animations.button, '0.4s')}
            >
              <Link
                href="/Curriculum_Bayron_Alpizar_Quesada.pdf"
                download="Curriculum_Bayron_Alpizar_Quesada.pdf"
                _hover={{ textDecoration: 'none' }}
              >
                <HStack
                  spacing={3}
                  px={6}
                  py={3}
                  borderRadius="full"
                  border="1px solid rgba(4, 165, 107, 0.3)"
                  bg="rgba(4, 165, 107, 0.06)"
                  color="#04a56b"
                  fontFamily='"Space Grotesk", sans-serif'
                  fontWeight="600"
                  fontSize="sm"
                  cursor="pointer"
                  transition="all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
                  role="group"
                  _hover={{
                    bg: "rgba(4, 165, 107, 0.12)",
                    borderColor: "#04a56b",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px -8px rgba(4, 165, 107, 0.35)",
                  }}
                >
                  <Icon as={FaDownload} fontSize="xs" />
                  <Text>View my resume</Text>
                  <Icon
                    as={FaArrowRight}
                    fontSize="xs"
                    transition="transform 0.3s ease"
                    _groupHover={{ transform: "translateX(3px)" }}
                  />
                </HStack>
              </Link>
            </Box>
          </VStack>

          {/* Right: Profile Image */}
          <Box
            ref={imageRef}
            position="relative"
            flexShrink={0}
            sx={createImageStyle(animations.image, '0.3s')}
          >
            {/* Outer decorative ring */}
            <Box
              position="absolute"
              top="-16px"
              left="-16px"
              right="-16px"
              bottom="-16px"
              borderRadius="full"
              border="1px solid rgba(4, 165, 107, 0.12)"
              animation={imageGlowActive ? `${subtlePulse} 4s ease-in-out infinite` : 'none'}
            />
            {/* Diagonal accent line */}
            <Box
              position="absolute"
              top="-24px"
              right="-24px"
              w="48px"
              h="48px"
              borderRight="2px solid rgba(4, 165, 107, 0.3)"
              borderTop="2px solid rgba(4, 165, 107, 0.3)"
              borderRadius="0 8px 0 0"
              opacity={imageGlowActive ? 1 : 0}
              transition="opacity 0.5s ease"
            />
            <Box
              position="absolute"
              bottom="-24px"
              left="-24px"
              w="48px"
              h="48px"
              borderLeft="2px solid rgba(4, 165, 107, 0.3)"
              borderBottom="2px solid rgba(4, 165, 107, 0.3)"
              borderRadius="0 0 0 8px"
              opacity={imageGlowActive ? 1 : 0}
              transition="opacity 0.5s ease"
            />

            <Box
              borderRadius="full"
              overflow="hidden"
              animation={imageGlowActive ? `${orbitGlow} 5s ease-in-out infinite` : 'none'}
              transition="box-shadow 0.5s ease"
              border="3px solid rgba(4, 165, 107, 0.2)"
              _hover={{ transform: 'scale(1.03)' }}
              sx={{
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
              }}
            >
              <Image
                src={perfilImg}
                alt="Profile picture"
                boxSize={{ base: "200px", md: "260px" }}
                objectFit="cover"
              />
            </Box>
          </Box>
        </Flex>

        {/* Competencies Section */}
        <VStack ref={competenciesRef} spacing={10} width="100%">
          <VStack spacing={3}>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              color="brand.text"
              sx={{
                fontFamily: '"Syne", "Space Grotesk", sans-serif',
                fontWeight: '700',
              }}
              style={createFadeIn(animations.competencies)}
            >
              Core Competencies
            </Heading>
            <Box
              w={animations.competencies ? "50px" : "0px"}
              h="2px"
              bg="brand.primary"
              borderRadius="full"
              transition="width 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s"
              boxShadow="0 0 8px rgba(4, 165, 107, 0.4)"
            />
          </VStack>

          <SimpleGrid columns={[1, 2, 2, 4]} spacing={5} width="100%">
            {competencies.map((comp, index) => (
              <VStack
                key={index}
                spacing={4}
                p={6}
                bg="rgba(4, 165, 107, 0.03)"
                border="1px solid rgba(4, 165, 107, 0.08)"
                borderRadius="2xl"
                position="relative"
                overflow="hidden"
                style={createFadeIn(animations.competencies, `${0.15 + index * 0.1}s`)}
                transition="all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
                _hover={{
                  transform: 'translateY(-6px)',
                  bg: 'rgba(4, 165, 107, 0.07)',
                  borderColor: 'rgba(4, 165, 107, 0.25)',
                  boxShadow: '0 12px 35px -10px rgba(4, 165, 107, 0.2)',
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #04a56b, transparent)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
                sx={{
                  '&:hover::before': { opacity: 1 },
                }}
              >
                <Box
                  color="brand.primary"
                  fontSize="2xl"
                  p={3}
                  borderRadius="xl"
                  bg="rgba(4, 165, 107, 0.06)"
                >
                  {comp.icon}
                </Box>
                <Heading
                  as="h4"
                  size="sm"
                  color="brand.text"
                  fontFamily='"Space Grotesk", sans-serif'
                  fontWeight="600"
                >
                  {comp.title}
                </Heading>
                <Text
                  color="gray.500"
                  fontSize="xs"
                  textAlign="center"
                  lineHeight="1.7"
                >
                  {comp.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
    </Box>
  );
};
