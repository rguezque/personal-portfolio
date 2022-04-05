import Head from 'next/head'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Heading, Link, Text, useColorModeValue } from '@chakra-ui/react'

const NotFound = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width initial-scale=1" />
                <meta charSet="UTF-8" />
                <title>404 Not Found</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Center width="100vw" height="100vh" alignItems="center" >
                <Box display="inline" align="center">
                    <p mb={0}>P&aacute;gina solicitada</p>
                    <Heading as="h1" size="3xl" fontWeight={300} mt={2}>
                        No Encontrada
                    </Heading>
                    <Link _hover={{ textDecoration: 'unset' }} href="/">
                        <Button bg={useColorModeValue('orange', 'purple')} leftIcon={<ChevronLeftIcon />}>
                            <Text>Regresar</Text>
                        </Button>
                    </Link>
                </Box>
            </Center>
        </>
    )
}

export default NotFound