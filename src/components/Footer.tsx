import { Box, Text, HStack, Link, Icon, VStack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref} 
      as="footer"
      py={8}
      px={8}
      bg="rgba(1, 15, 24, 0.6)"
      borderTop="1px solid rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(10px)"
      color="gray.400"
      opacity={inView ? 1 : 0}
      transition="opacity 0.8s ease-in-out"
    >
      <VStack spacing={4} maxW="container.lg" mx="auto">
        {/* Social Media Icons */}
        <HStack spacing={6}>
          <Link href="https://www.linkedin.com/in/bayron-alpízar-quesada-21439a126" isExternal _hover={{ color: 'brand.primary' }}>
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
          <Link href="https://github.com/Bayronalpizar99" isExternal _hover={{ color: 'brand.primary' }}>
            <Icon as={FaGithub} boxSize={6} />
          </Link>
        </HStack>

        {/* ✅ 4. Texto traducido al inglés */}
        <Text>
          Developed by{" "}
          <Link
            href="https://github.com/Bayronalpizar99"
            isExternal
            color="brand.primary"
            fontWeight="bold"
            _hover={{ textDecoration: 'underline' }}
          >
            @Bayronalpizar99
          </Link>
        </Text>

        {/* Copyright Text */}
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Bayron AQ. All rights reserved.
        </Text>

      </VStack>
    </Box>
  );
};