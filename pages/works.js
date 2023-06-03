import React from "react";
import { Container, Heading, SimpleGrid, Box, Text, useColorModeValue, Stack } from "@chakra-ui/react";

const worksData = [
  {
    title: "Estagiário de TI",
    company: "Controladoria Geral da União",
    period: "Dezembro 2019 - Fevereiro 2021",
    description: "Atuei como desenvolvedor em um time ágil, realizando atualizações diárias do quadro Kanban no Jira e participando de rituais ágeis, como Daily, Review e Retro. Realizei a migração de um sistema legado de JavaScript para C#. Fui responsável pela manutenção e desenvolvimento de novos recursos para a plataforma e-aud CGU, utilizando tecnologias como JavaScript, HTML, CSS, Bootstrap e Web Components. Também trabalhei na criação de uma nova plataforma de atendimento via chamado, utilizando React, JavaScript e Styled Components. Além disso, realizei manutenção e desenvolvimento nas plataformas legadas Fala.BR e e-aud CGU. Estas experiências me proporcionaram habilidades sólidas em desenvolvimento front-end, gestão de projetos, metodologias ágeis e um forte compromisso com a qualidade do código.",
  },
];

const WorksPage = () => {
  const descriptionColor = useColorModeValue("gray.700", "gray.300"); // Define a cor do texto com base no modo de cores
  const borderColor = useColorModeValue("gray.200", "gray.600"); // Define a cor da borda com base no modo de cores

  return (
    <Container>
      <Heading as="h1" variant="page-title" mb={6}>
        Works
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={6}>
        {worksData.map((work, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg" borderColor={borderColor}>
            <Stack direction="column" spacing={2}>
              <Heading as="h3" size="md">
                {work.title}
              </Heading>
              <Text fontSize="sm" fontWeight="bold" color="gray.500">
                {work.company}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {work.period}
              </Text>
              <Text fontSize="sm" color={descriptionColor}>
                {work.description}
              </Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default WorksPage;
