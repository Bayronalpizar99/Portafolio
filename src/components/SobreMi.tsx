import { Box, Heading, VStack, Text, Image, SimpleGrid, Icon, Link } from "@chakra-ui/react";
import perfilImg from '../assets/perfil.jpeg';
import { FaUsers, FaLightbulb, FaCode, FaSyncAlt, FaDownload } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

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

  // Estados para controlar las animaciones
  const [animations, setAnimations] = useState({
    heading: false,
    image: false,
    text: false,
    competencies: false,
    button: false
  });

  // Estados especiales para la imagen (evitar parpadeo)
  const [imageHasBeenVisible, setImageHasBeenVisible] = useState(false);
  const [imageGlowActive, setImageGlowActive] = useState(false);

  // Configuración de IntersectionObserver optimizada
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

  // Manejar animaciones normales (se resetean cada vez)
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

  // Manejar animación especial de la imagen (sin parpadeo)
  useEffect(() => {
    if (imageInView) {
      // Si la imagen está visible, activar animación
      setAnimations(prev => ({ ...prev, image: true }));
      setImageGlowActive(true);
      
      // Marcar que la imagen ha sido visible al menos una vez
      if (!imageHasBeenVisible) {
        setImageHasBeenVisible(true);
      }
    } else {
      // Si la imagen no está visible
      if (imageHasBeenVisible) {
        // Si ya ha sido visible antes, mantener visible pero sin glow
        setAnimations(prev => ({ ...prev, image: true }));
        setImageGlowActive(false);
      } else {
        // Si nunca ha sido visible, mantener oculta
        setAnimations(prev => ({ ...prev, image: false }));
        setImageGlowActive(false);
      }
    }
  }, [imageInView, imageHasBeenVisible]);

  const createFadeInStyle = (shouldShow: boolean, delay: string = '0s') => ({
    opacity: shouldShow ? 1 : 0,
    transform: shouldShow ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}`
  });

  // Estilo especial para la imagen (sin reset de posición)
  const createImageStyle = (shouldShow: boolean, delay: string = '0s') => ({
    opacity: shouldShow ? 1 : (imageHasBeenVisible ? 1 : 0),
    transform: shouldShow ? 'translateY(0)' : (imageHasBeenVisible ? 'translateY(0)' : 'translateY(20px)'),
    transition: `opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}`
  });

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
          style={createFadeInStyle(animations.heading)}
        >
          About Me
        </Heading>

        <Box
          ref={imageRef}
          position="relative"
          display="inline-block"
          sx={{
            ...createImageStyle(animations.image, '0.2s'),
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-6px',
              left: '-6px',
              right: '-6px',
              bottom: '-6px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(4,165,107,0.2), rgba(2,214,143,0.2))',
              animation: imageGlowActive ? 'profileGlow 6s ease-in-out infinite' : 'none',
              filter: 'blur(1.5px)',
              zIndex: -1,
              opacity: imageGlowActive ? 1 : 0,
              transition: 'opacity 0.3s ease'
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '-3px',
              left: '-3px',
              right: '-3px',
              bottom: '-3px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(4,165,107,0.1), rgba(2,214,143,0.1))',
              animation: imageGlowActive ? 'profileGlow 6s ease-in-out infinite reverse' : 'none',
              zIndex: -1,
              opacity: imageGlowActive ? 1 : 0,
              transition: 'opacity 0.3s ease'
            },
            '@keyframes profileGlow': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' }
            },
            transition: 'transform 0.3s ease',
            _hover: { transform: 'scale(1.03)' },
            backfaceVisibility: 'hidden',
            perspective: '1000px',
            willChange: 'transform, opacity'
          }}
        >
          <Image
            src={perfilImg}
            alt="Profile picture"
            boxSize="200px"
            borderRadius="full"
            objectFit="cover"
            position="relative"
            zIndex={1}
            border="4px solid"
            borderColor="brand.background"
            boxShadow={imageGlowActive ? "0 0 12px rgba(4, 165, 107, 0.2)" : "0 0 8px rgba(4, 165, 107, 0.1)"}
            sx={{
              backfaceVisibility: 'hidden',
              perspective: '1000px',
              willChange: 'transform',
              transition: 'box-shadow 0.3s ease'
            }}
          />
        </Box>

        <Text
          ref={textRef}
          fontSize="lg"
          lineHeight="1.8"
          color="gray.300"
          textAlign="center"
          maxWidth="600px"
          sx={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          style={createFadeInStyle(animations.text, '0.4s')}
        >
          Full-stack developer passionate about building innovative, high-performance web applications. I enjoy exploring new technologies by working on projects to master tools that allow me to build amazing websites.
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
            style={createFadeInStyle(animations.competencies)}
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
                style={createFadeInStyle(animations.competencies, `${0.2 + index * 0.15}s`)}
                sx={{
                  backfaceVisibility: 'hidden',
                  perspective: '1000px',
                  willChange: 'transform'
                }}
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

          <Box 
            ref={buttonRef}
            pt={6}
            style={createFadeInStyle(animations.button, '0.8s')}
          >
            <Link
              href="/Currículum_Bayron_Alpízar_Quesada.pdf"
              download="Currículum_Bayron_Alpízar_Quesada.pdf"
              fontSize="lg"
              fontWeight="700"
              color="brand.primary"
              cursor="pointer"
              display="inline-flex"
              alignItems="center"
              gap={3}
              px={4}
              py={3}
              borderRadius="lg"
              border="2px solid transparent"
              position="relative" 
              transition="all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              sx={{
                fontFamily: '"Space Grotesk", system-ui, sans-serif',
                willChange: 'transform, color, border-color, background-color',
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                perspective: '1000px'
              }}
              _hover={{
                textDecoration: 'none', 
                color: '#02d68f',
                borderColor: '#04a56b',
                backgroundColor: 'rgba(4, 165, 107, 0.1)',
                transform: 'translate3d(0, -2px, 0)',
                boxShadow: '0 4px 12px rgba(4, 165, 107, 0.3)',
              }}
            >
              <Icon as={FaDownload} />
              View my resume
            </Link>
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
};