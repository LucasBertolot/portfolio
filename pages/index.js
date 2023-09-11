import React from 'react';
import { Container, Box, Heading, Text, useColorMode, Flex } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const skills = [
  { name: 'JavaScript', level: 3 },
  { name: 'TypeScript', level: 2},
  { name: 'React', level: 3 },
  { name: 'Node.js', level: 2 },
  { name: 'HTML/CSS', level: 3 },
  { name: 'C#', level: 3 },
  { name: 'Bootstrap', level: 2 }
];

const Skill = ({ name, level }) => {
  const { colorMode } = useColorMode();

  const renderStars = () => {
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      const starColor = i <= level ? (colorMode === 'light' ? 'yellow.500' : 'yellow.300') : 'gray.300';
  
      stars.push(
        <StarIcon
          key={i}
          boxSize={4}
          color={starColor}
          mr={1}
        />
      );
    }
  
    return stars;
  };
  

  return (
    <Box>
      <Text
        m={1}
        px={3}
        py={1}
        bg={colorMode === 'light' ? 'blue.500' : 'blue.200'}
        color={colorMode === 'light' ? 'white' : 'blue.800'}
        borderRadius="md"
        boxShadow={colorMode === 'light' ? 'md' : 'none'}
        fontWeight="bold"
        _hover={{ bg: colorMode === 'light' ? 'blue.600' : 'blue.300' }}
        display="inline-block"
      >
        {name}
      </Text>
      <Box display="inline-block" ml={2}>
        {renderStars()}
      </Box>
    </Box>
  );
};

const Home = () => {
  const { colorMode } = useColorMode();

  return (
    <Container maxW="container.md">
      <Heading as="h1" size="2xl" mb={4}>
        Lucas Bertolot
      </Heading>
      <Text fontSize="xl" color="gray.600" mb={6}>
        Fullstack Developer
      </Text>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems={{ md: 'center' }}
      >
        <Box textAlign="left">
          <Heading as="h3" size="lg" mb={1}>
            Skills
          </Heading>
          <Box>
            {skills.map((skill) => (
              <Skill key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </Box>
        </Box>
        <Box textAlign="center" flex={1}>
          <Heading as="h2" size="lg" mb={4}>
            About Me
          </Heading>
          <Text>
            I am an internet enthusiast who has always enjoyed spending time online. Over the years, I have decided to
            pursue a career in this field and have developed skills as a front-end developer. I am passionate about
            creating engaging and dynamic web experiences, and I am always striving to stay up-to-date with the latest
            technologies and trends. I am excited to continue growing in this field and contribute to innovative
            projects.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;

