import { Box, Heading, VStack, SimpleGrid, Text, Tag, HStack, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Project Name 1",
    description: "A brief but impactful description of what your project does, the problem it solves, and its main purpose.",
    image: "https://picsum.photos/seed/project1/400/300",
    tags: ["React", "Chakra UI", "TypeScript"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Name 2",
    description: "Here's the description for the second project. Highlight the most important features or technical challenges you overcame.",
    image: "https://picsum.photos/seed/project2/400/300",
    tags: ["Node.js", "PostgreSQL", "Docker"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Name 3",
    description: "This is the third project. You can talk about the API you built, the database you designed, or the interface you created.",
    image: "https://picsum.photos/seed/project3/400/300",
    tags: ["Python", "Figma", "Java"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Name 4",
    description: "Description of the fourth project, perhaps focused on the backend, a REST API, or a specific database you've managed.",
    image: "https://picsum.photos/seed/project4/400/300",
    tags: ["Java", "Spring Boot", "Supabase"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Name 5",
    description: "Fifth project. This could be a full-stack application that demonstrates your versatility and knowledge in different areas.",
    image: "https://picsum.photos/seed/project5/400/300",
    tags: ["C#", ".NET", "React"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Name 6",
    description: "Last featured project. Ideal for showcasing a specific skill like UI/UX design with Figma or using a library like Bootstrap.",
    image: "https://picsum.photos/seed/project6/400/300",
    tags: ["HTML", "CSS", "Bootstrap", "Figma"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      bg="rgba(67, 136, 162, 0.05)"
      border="1px solid"
      borderColor="rgba(67, 136, 162, 0.1)"
      borderRadius="xl"
      overflow="hidden"
      opacity={inView ? 1 : 0}
      transform={inView ? 'translateY(0)' : 'translateY(30px)'}
      transition={`all 0.3s ease-in-out, opacity 0.6s ease-in-out ${index * 150}ms, transform 0.6s ease-in-out ${index * 150}ms`}
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '0 10px 30px rgba(4, 165, 107, 0.2)',
        borderColor: 'brand.primary',
      }}
    >
      <Box
        height="200px"
        bgImage={`url(${project.image})`}
        bgSize="cover"
        bgPosition="center"
        
        transition="transform 0.3s ease-in-out"
        _hover={{
            transform: 'scale(1.05)'
        }}
      />
      <VStack p={6} align="start" spacing={4}>
        <Heading as="h3" size="md" color="brand.text">{project.title}</Heading>
        <Text color="gray.300" fontSize="sm">{project.description}</Text>
        <HStack wrap="wrap" spacing={2}>
          {project.tags.map((tag: string) => (
            <Tag key={tag} size="sm" bg="brand.primary" color="white" borderRadius="full">
              {tag}
            </Tag>
          ))}
        </HStack>
        <HStack spacing={4} width="100%" justify="flex-end" pt={4}>
          <Link href={project.liveUrl} isExternal _hover={{ color: 'brand.primary' }}>
            <HStack>
              <Icon as={FaExternalLinkAlt} />
              <Text>Demo</Text>
            </HStack>
          </Link>
          <Link href={project.repoUrl} isExternal _hover={{ color: 'brand.primary' }}>
            <HStack>
              <Icon as={FaGithub} />
              <Text>Code</Text>
            </HStack>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export const Proyectos = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <Box
      as="section"
      id="proyectos"
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
      <VStack spacing={12} maxWidth="1200px" width="100%">
        <Heading
          as="h2"
          size="2xl"
          color="brand.text"
          opacity={inView ? 1 : 0}
          transform={inView ? 'translateY(0)' : 'translateY(20px)'}
          transition="opacity 0.6s ease-out, transform 0.6s ease-out"
          sx={{
            fontFamily: '"Space Grotesk", system-ui, sans-serif',
            fontWeight: '700',
          }}
        >
          My Projects
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} width="100%">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};