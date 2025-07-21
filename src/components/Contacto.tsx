import {
  Box, Heading, VStack, Text, Input, Textarea, Button, HStack, Link, Icon, useToast, 
  FormControl, FormLabel, SimpleGrid, Divider, useClipboard, Container
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FaEnvelope, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { FiCopy, FiMail, FiMessageCircle } from "react-icons/fi";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// Animaciones personalizadas
const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(67, 136, 162, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(67, 136, 162, 0); }
  100% { box-shadow: 0 0 0 0 rgba(67, 136, 162, 0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Contacto = () => {
  const form = useRef<HTMLFormElement>(null);
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { onCopy: onCopyEmail, hasCopied: hasCopiedEmail } = useClipboard("bayalpiizar777@gmail.com");
  const { onCopy: onCopyPhone, hasCopied: hasCopiedPhone } = useClipboard("85825590");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

       // --- AÑADE ESTAS LÍNEAS PARA DEPURAR ---
    console.log("Service ID que se está usando:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Template ID que se está usando:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("Public Key que se está usando:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    // -------------------------------------------

    if (form.current) {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ).then(() => {
        toast({ 
          title: "¡Mensaje Enviado! 🚀", 
          description: "Gracias por contactarme, te responderé pronto.", 
          status: "success", 
          duration: 5000, 
          isClosable: true,
          position: "top"
        });
        form.current?.reset();
      }, () => {
        toast({ 
          title: "Error al enviar 😕", 
          description: "Hubo un problema. Inténtalo de nuevo.", 
          status: "error", 
          duration: 5000, 
          isClosable: true,
          position: "top"
        });
      }).finally(() => setIsSubmitting(false));
    }
  };

  return (
    <Box 
      as="section" 
      id="contacto" 
      minHeight="100vh" 
      py="80px" 
      color="white" 
      display="flex" 
      alignItems="center" 
      px={8}
    >

      <Container maxW="container.lg">
        <VStack 
          spacing={12} 
          maxWidth="800px" 
          mx="auto" 
          width="100%"
          animation={`${fadeIn} 1s ease-out`}
        >
          
          {/* Header con efecto de texto gradiente */}
          <VStack textAlign="center" spacing={6}>
            <Heading 
              as="h2" 
              size="3xl"
              color="brand.text"
              sx={{ 
                fontFamily: '"Space Grotesk", system-ui, sans-serif', 
                fontWeight: '800'
              }}
            >
              Contacto
            </Heading>
            <Text 
              color="gray.300" 
              fontSize="lg"
            >
              No dudes en contactarme. Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades.
            </Text>
          </VStack>

          {/* Panel de Contacto Unificado */}
          <VStack 
            bg="rgba(0,0,0,0.2)" 
            p={8} 
            borderRadius="xl" 
            spacing={8} 
            width="100%"
          >
            
            {/* Métodos de contacto mejorados */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} width="100%">
              
              {/* Email Card */}
              <Box
                bg="rgba(67, 136, 162, 0.1)"
                p={6}
                borderRadius="2xl"
                border="1px solid rgba(67, 136, 162, 0.2)"
                transition="all 0.3s ease"
                _hover={{ 
                  transform: "translateY(-5px)",
                  bg: "rgba(67, 136, 162, 0.15)",
                  boxShadow: "0 20px 40px -10px rgba(67, 136, 162, 0.3)"
                }}
                cursor="pointer"
                onClick={() => window.open('mailto:bayalpiizar777@gmail.com')}
              >
                <VStack spacing={4}>
                  <Icon 
                    as={FaEnvelope} 
                    boxSize={12} 
                    color="#4388a2"
                    animation={`${pulse} 2s infinite`}
                  />
                  <VStack spacing={2}>
                    <HStack>
                      <Icon as={FiMail} color="gray.400" />
                      <Text color="gray.400" fontSize="sm" fontWeight="500">Email</Text>
                    </HStack>
                    <Text color="white" fontWeight="600" fontSize="lg">
                      bayalpiizar777@gmail.com
                    </Text>
                  </VStack>
                  <Button 
                    size="sm" 
                    variant="outline"
                    colorScheme="blue"
                    onClick={(e) => { e.stopPropagation(); onCopyEmail(); }} 
                    leftIcon={<FiCopy/>}
                    _hover={{ bg: "rgba(67, 136, 162, 0.2)" }}
                  >
                    {hasCopiedEmail ? '¡Copiado!' : 'Copiar'}
                  </Button>
                </VStack>
              </Box>

              {/* WhatsApp Card */}
              <Box
                bg="rgba(37, 211, 102, 0.1)"
                p={6}
                borderRadius="2xl"
                border="1px solid rgba(37, 211, 102, 0.2)"
                transition="all 0.3s ease"
                _hover={{ 
                  transform: "translateY(-5px)",
                  bg: "rgba(37, 211, 102, 0.15)",
                  boxShadow: "0 20px 40px -10px rgba(37, 211, 102, 0.3)"
                }}
                cursor="pointer"
                onClick={() => window.open('https://wa.me/50685825590')}
              >
                <VStack spacing={4}>
                  <Icon 
                    as={FaWhatsapp} 
                    boxSize={12} 
                    color="#25D366"
                    animation={`${pulse} 2s infinite 1s`}
                  />
                  <VStack spacing={2}>
                    <HStack>
                      <Icon as={FiMessageCircle} color="gray.400" />
                      <Text color="gray.400" fontSize="sm" fontWeight="500">WhatsApp</Text>
                    </HStack>
                    <Text color="white" fontWeight="600" fontSize="lg">
                      +506 8582-5590
                    </Text>
                  </VStack>
                  <Button 
                    size="sm" 
                    variant="outline"
                    colorScheme="whatsapp"
                    onClick={(e) => { e.stopPropagation(); onCopyPhone(); }} 
                    leftIcon={<FiCopy/>}
                    _hover={{ bg: "rgba(37, 211, 102, 0.2)" }}
                  >
                    {hasCopiedPhone ? '¡Copiado!' : 'Copiar'}
                  </Button>
                </VStack>
              </Box>
            </SimpleGrid>

            <Box position="relative" width="100%">
              <Divider borderColor="rgba(255,255,255,0.2)" />
              <Box
                position="absolute"
                top="-12px"
                left="50%"
                transform="translateX(-50%)"
                bg="rgba(255, 255, 255, 0.05)"
                px={4}
                py={2}
                borderRadius="full"
                backdropFilter="blur(10px)"
              >
                <Text color="gray.400" fontSize="sm" fontWeight="500">o escríbeme directamente</Text>
              </Box>
            </Box>

            {/* Formulario mejorado */}
            <Box as="form" ref={form} onSubmit={sendEmail} width="100%">
              <VStack spacing={6}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} width="100%">
                  <FormControl isRequired>
                    <FormLabel color="gray.300" fontWeight="500">Tu Nombre</FormLabel>
                    <Input 
                      type="text" 
                      name="from_name" 
                      placeholder="John Doe"
                      bg="rgba(255, 255, 255, 0.05)"
                      border="1px solid rgba(255, 255, 255, 0.1)"
                      borderRadius="xl"
                      _hover={{ borderColor: "rgba(67, 136, 162, 0.5)" }}
                      _focus={{ 
                        borderColor: "#4388a2",
                        boxShadow: "0 0 0 1px #4388a2",
                        bg: "rgba(255, 255, 255, 0.08)"
                      }}
                      color="white"
                      _placeholder={{ color: "gray.500" }}
                      size="lg"
                    />
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel color="gray.300" fontWeight="500">Tu Correo</FormLabel>
                    <Input 
                      type="email" 
                      name="from_email" 
                      placeholder="john.doe@example.com"
                      bg="rgba(255, 255, 255, 0.05)"
                      border="1px solid rgba(255, 255, 255, 0.1)"
                      borderRadius="xl"
                      _hover={{ borderColor: "rgba(67, 136, 162, 0.5)" }}
                      _focus={{ 
                        borderColor: "#4388a2",
                        boxShadow: "0 0 0 1px #4388a2",
                        bg: "rgba(255, 255, 255, 0.08)"
                      }}
                      color="white"
                      _placeholder={{ color: "gray.500" }}
                      size="lg"
                    />
                  </FormControl>
                </SimpleGrid>
                
                <FormControl isRequired>
                  <FormLabel color="gray.300" fontWeight="500">Tu Mensaje</FormLabel>
                  <Textarea 
                    name="message" 
                    placeholder="¡Hola! Me gustaría colaborar contigo en..."
                    rows={5}
                    bg="rgba(255, 255, 255, 0.05)"
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    borderRadius="xl"
                    _hover={{ borderColor: "rgba(67, 136, 162, 0.5)" }}
                    _focus={{ 
                      borderColor: "#4388a2",
                      boxShadow: "0 0 0 1px #4388a2",
                      bg: "rgba(255, 255, 255, 0.08)"
                    }}
                    color="white"
                    _placeholder={{ color: "gray.500" }}
                    resize="vertical"
                  />
                </FormControl>
                
                <Button 
                  type="submit" 
                  size="lg"
                  width="100%" 
                  bgGradient="linear(45deg, #4388a2, #63b3ed)"
                  color="white" 
                  isLoading={isSubmitting}
                  loadingText="Enviando..."
                  rightIcon={<FaPaperPlane />}
                  _hover={{ 
                    bgGradient: "linear(45deg, #3182ce, #4388a2)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 20px 40px -10px rgba(67, 136, 162, 0.4)"
                  }}
                  _active={{ transform: "translateY(0px)" }}
                  transition="all 0.3s ease"
                  borderRadius="xl"
                  fontWeight="600"
                  fontSize="lg"
                  py={6}
                >
                  Enviar Mensaje
                </Button>
              </VStack>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};