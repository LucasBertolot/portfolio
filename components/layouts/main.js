import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic.js'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Lucas Bertolot homepage" />
                <meta name="author" content="Lucas Bertolot" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta property="og:site_name" context="Lucas Bertolot" />
                <meta name="og:title" context="Lucas Bertolot" />
                <title>Lucas Bertolot - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>

            {children}

            <Footer />
        </Container>
        </Box>
    )
}

export default Main