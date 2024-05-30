import { Box, Container, VStack, Heading, Text, Link, Flex } from "@chakra-ui/react";

const topics = [
  {
    title: "Latest in AI",
    description: "Discuss the latest trends and breakthroughs in Artificial Intelligence.",
    link: "#"
  },
  {
    title: "Web Development",
    description: "Share tips, tricks, and best practices for web development.",
    link: "#"
  },
  {
    title: "Cybersecurity",
    description: "Talk about the latest in cybersecurity and how to stay safe online.",
    link: "#"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="center">
        <Heading as="h1" size="lg">Tech Forum</Heading>
      </Flex>
      <VStack spacing={8} mt={8}>
        {topics.map((topic, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading fontSize="xl">{topic.title}</Heading>
            <Text mt={4}>{topic.description}</Text>
            <Link color="teal.500" href={topic.link} mt={2} display="block">View Discussion</Link>
          </Box>
        ))}
      </VStack>
      <Flex as="footer" bg="gray.200" p={4} mt={8} justifyContent="center">
        <Text>© 2023 Tech Forum. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;