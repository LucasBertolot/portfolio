import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
    return(
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} aling="center">
                Hello, I&apos;m a full-stack developer based in Brazil!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Lucas Bertolot
                    </Heading>
                    <p>Full stack Developer</p>        
                </Box>
            </Box>
        </Container>
    )
}
