// src/components/Contacto.tsx
import {
  Box, Heading, VStack, Text, Input, Textarea, Button, HStack, Icon, useToast,
  FormControl, FormLabel, SimpleGrid, Divider, useClipboard, Container
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FaEnvelope, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { FiCopy, FiMail, FiMessageCircle } from "react-icons/fi";
import React, { useState } from 'react';
import { useInView } from "react-intersection-observer";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(67, 136, 162, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(67, 136, 162, 0); }
  100% { box-shadow: 0 0 0 0 rgba(67, 136, 162, 0); }
`;

export const Contacto = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { onCopy: onCopyEmail, hasCopied: hasCopiedEmail } = useClipboard("bayalpiizar777@gmail.com");
  const { onCopy: onCopyPhone, hasCopied: hasCopiedPhone } = useClipboard("85825590");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ✅ CAMBIO PRINCIPAL: Ahora usa la API route de Vercel
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent! 🚀",
          description: data.message,
          status: "success",
          duration: 6000,
          isClosable: true,
          position: "top"
        });
        
        setFormData({ name: '', email: '', message: '' });
        
      } else {
        throw new Error(data.error || 'Unknown error');
      }

    } catch (error: any) {
      console.error('Error sending message:', error);
      
      toast({
        title: "Error Sending Message 😕",
        description: error.message || "There was a problem. Please try again.",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const { ref: sectionRef, inView: sectionInView } = useInView({ threshold: 0.1 });
  const createFadeInStyle = (inView: boolean, delay: string = '0s') => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.6s ease-out ${delay}, transform 0.6s ease-out ${delay}`
  });

  return (
    <Box 
      as="section" 
      id="contacto" 
      ref={sectionRef}
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
          style={createFadeInStyle(sectionInView)}
        >
          <VStack textAlign="center" spacing={6}>
            <Heading 
              as="h2" 
              size="3xl"
              color="brand.text"
              sx={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', fontWeight: '800' }}
            >
              Contact Me
            </Heading>
            <Text color="gray.300" fontSize="lg">
              Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
            </Text>
          </VStack>

          <VStack 
            bg="rgba(67, 136, 162, 0.05)" 
            p={8} 
            borderRadius="xl" 
            spacing={8} 
            width="100%"
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} width="100%">
              <Box
                bg="rgba(67, 136, 162, 0.05)"
                border="1px solid"
                borderColor="rgba(67, 136, 162, 0.1)"
                p={6} 
                borderRadius="2xl" 
                transition="all 0.3s ease"
                _hover={{ 
                  transform: "translateY(-8px)", 
                  boxShadow: "0 10px 30px rgba(4, 165, 107, 0.2)",
                  borderColor: 'brand.primary'
                }}
                cursor="pointer" 
                onClick={() => window.open('mailto:bayalpiizar777@gmail.com')}
                style={createFadeInStyle(sectionInView, '0.2s')}
              >
                <VStack spacing={4}>
                  <Icon as={FaEnvelope} boxSize={12} color="#4388a2" animation={`${pulse} 2s infinite`} />
                  <VStack spacing={2}>
                    <HStack><Icon as={FiMail} color="gray.400" /><Text color="gray.400" fontSize="sm" fontWeight="500">Email</Text></HStack>
                    <Text color="white" fontWeight="600" fontSize="lg">bayalpiizar777@gmail.com</Text>
                  </VStack>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    colorScheme="blue" 
                    onClick={(e) => { e.stopPropagation(); onCopyEmail(); }} 
                    leftIcon={<FiCopy/>} 
                    _hover={{ 
                      bg: "rgba(67, 136, 162, 0.2)",
                      borderColor: 'brand.primary'
                    }}
                  >
                    {hasCopiedEmail ? 'Copied!' : 'Copy'}
                  </Button>
                </VStack>
              </Box>

              <Box
                bg="rgba(67, 136, 162, 0.05)"
                border="1px solid"
                borderColor="rgba(67, 136, 162, 0.1)"
                p={6} 
                borderRadius="2xl" 
                transition="all 0.3s ease"
                _hover={{ 
                  transform: "translateY(-8px)", 
                  boxShadow: "0 10px 30px rgba(4, 165, 107, 0.2)",
                  borderColor: 'brand.primary'
                }}
                cursor="pointer" 
                onClick={() => window.open('https://wa.me/50685825590')}
                style={createFadeInStyle(sectionInView, '0.3s')}
              >
                <VStack spacing={4}>
                  <Icon as={FaWhatsapp} boxSize={12} color="#25D366" animation={`${pulse} 2s infinite 1s`} />
                  <VStack spacing={2}>
                    <HStack><Icon as={FiMessageCircle} color="gray.400" /><Text color="gray.400" fontSize="sm" fontWeight="500">WhatsApp</Text></HStack>
                    <Text color="white" fontWeight="600" fontSize="lg">+506 8582-5590</Text>
                  </VStack>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    colorScheme="whatsapp" 
                    onClick={(e) => { e.stopPropagation(); onCopyPhone(); }} 
                    leftIcon={<FiCopy/>} 
                    _hover={{ 
                      bg: "rgba(37, 211, 102, 0.2)",
                      borderColor: '#25D366'
                    }}
                  >
                    {hasCopiedPhone ? 'Copied!' : 'Copy'}
                  </Button>
                </VStack>
              </Box>
            </SimpleGrid>

            <Box position="relative" width="100%" style={createFadeInStyle(sectionInView, '0.4s')}>
              <Divider borderColor="rgba(255,255,255,0.2)" />
              <Box position="absolute" top="-12px" left="50%" transform="translateX(-50%)" bg="rgba(255, 255, 255, 0.05)" px={4} py={2} borderRadius="full" backdropFilter="blur(10px)">
                <Text color="gray.400" fontSize="sm" fontWeight="500">or write me directly</Text>
              </Box>
            </Box>

            <Box as="form" onSubmit={handleSubmit} width="100%" style={createFadeInStyle(sectionInView, '0.5s')}>
              <VStack spacing={6}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} width="100%">
                  <FormControl isRequired>
                    <FormLabel color="gray.300" fontWeight="500">Your Name</FormLabel>
                    <Input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="John Doe" 
                      bg="rgba(255, 255, 255, 0.05)" 
                      border="1px solid rgba(255, 255, 255, 0.1)" 
                      borderRadius="xl" 
                      _hover={{ borderColor: "rgba(67, 136, 162, 0.5)" }} 
                      _focus={{ 
                        borderColor: "brand.primary", 
                        boxShadow: "0 0 0 1px #04a56b", 
                        bg: "rgba(255, 255, 255, 0.08)" 
                      }} 
                      color="white" 
                      _placeholder={{ color: "gray.500" }} 
                      size="lg"
                    />
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel color="gray.300" fontWeight="500">Your Email</FormLabel>
                    <Input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="john.doe@example.com" 
                      bg="rgba(255, 255, 255, 0.05)" 
                      border="1px solid rgba(255, 255, 255, 0.1)" 
                      borderRadius="xl" 
                      _hover={{ borderColor: "rgba(67, 136, 162, 0.5)" }} 
                      _focus={{ 
                        borderColor: "brand.primary", 
                        boxShadow: "0 0 0 1px #04a56b", 
                        bg: "rgba(255, 255, 255, 0.08)" 
                      }} 
                      color="white" 
                      _placeholder={{ color: "gray.500" }} 
                      size="lg"
                    />
                  </FormControl>
                </SimpleGrid>
                
                <FormControl isRequired>
                  <FormLabel color="gray.300" fontWeight="500">Your Message</FormLabel>
                  <Textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    placeholder="Hello! I'd like to collaborate with you on..." 
                    rows={5} 
                    bg="rgba(255, 255, 255, 0.05)" 
                    border="1px solid rgba(255, 255, 255, 0.1)" 
                    borderRadius="xl" 
                    _hover={{ borderColor: "rgba(67, 136, 162, 0.5)" }} 
                    _focus={{ 
                      borderColor: "brand.primary", 
                      boxShadow: "0 0 0 1px #04a56b", 
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
                  px={16} 
                  alignSelf="center"
                  bgGradient="linear(45deg, #4388a2, #63b3ed)"
                  color="white" 
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                  rightIcon={<FaPaperPlane />}
                  _hover={{ 
                    bgGradient: "linear(45deg, #3182ce, #4388a2)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 20px -5px rgba(67, 136, 162, 0.4)"
                  }}
                  _active={{ transform: "translateY(0px)" }}
                  transition="all 0.3s ease"
                  borderRadius="xl"
                  fontWeight="600"
                  py={6}
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};