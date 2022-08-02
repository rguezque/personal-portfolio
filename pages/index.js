import {
    Box,
    Button,
    Container,
    Divider,
    Heading,
    Link,
    List,
    ListIcon,
    ListItem,
    SimpleGrid,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import Head from 'next/head'
import {
    Footer,
    GridItem,
    ProfilePhoto,
    Row,
    Header1,
    Header2,
    Navbar,
    ScrollTopButton
} from './../components'
import {
    FaDownload,
    FaGithub,
    FaGoogle,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa'
import sections from './../components/lib/sections'
import experience from '../components/lib/experience'
import projects from '../components/lib/projects'

export default function Home() {
    const githubAccount = 'https://github.com/rguezque';

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width initial-scale=1" />
                <meta name="description" content="Portafolio personal. Next.js, PHP, CSS, HTML, Javascript, Git y MySQL" />
                <meta name="keywords" content="desarrollador web jr, web developer jr, next.js developer, php, javascript" />
                <meta charSet="UTF-8" />
                <title>Luis Arturo Rodríguez | Web Developer Jr</title>
                <link rel="icon" href="favicon.ico" />
            </Head>

            <Navbar />

            <Container maxW="container.lg" >
                <Box display={{ md: 'flex' }} mb={6}>
                    <ProfilePhoto align="center" order={2} />

                    <Box flexGrow={1} order={1}>
                        <Heading fontSize={{ base: 30, md: 35, xl: 40 }} fontWeight={200} mt={{ base: 4, md: 6 }} mb={0} pb={0}>Hola, soy</Heading>
                        <Header1 mt={2} mb={2}>Luis Arturo Rodr&iacute;guez</Header1>
                        <Text fontWeight={600} fontSize={{ base: 17, md: 20 }}>
                            Web Developer Jr.
                        </Text>
                        <Text>
                            Conocimientos de <b>Next.js</b>, <b>PHP</b>, MySQL, HTML, CSS, Javascript, Git. He ejercido la docencia como profesor en dos universidades y tambi&eacute;n he estado en atención a clientes y ventas. Con entusiasmo de formar parte de un productivo y exitoso equipo. Aprendo con rapidez nuevos conocimientos.
                        </Text>
                        <Link isExternal _hover={{ textDecoration: 'unset' }} href="https://drive.google.com/file/d/1WWnbJhMmyn1VaIsQRRYNSFVCNvZ9fGVw/view?usp=sharing" download>
                            <Button bg={useColorModeValue('orange', 'purple')} leftIcon={<FaDownload />}>
                                <Text>Descargar Resume</Text>
                            </Button>
                        </Link>
                    </Box>

                </Box>

                <Box>
                    <Header2 id={sections.proyectos.name}>{sections.proyectos.title}</Header2>

                    <SimpleGrid columns={[1, 2, 3]} gap={6}>
                        {
                            projects.map(project => (
                                <GridItem href={`${githubAccount}${project.repo}`} thumbnail={project.thumbnail} title={project.title}>
                                    {project.description}
                                </GridItem>
                            ))
                        }
                    </SimpleGrid>
                </Box>

                <Box>
                    <Header2 id={sections.experiencia.name}>{sections.experiencia.title}</Header2>

                    {
                        experience.map((entry, index) => (
                            <>
                                <Row enterpriseName={entry.enterpriseName.toString()} jobDuration={entry.jobDuration}>
                                    <b>{entry.position}</b>. {entry.description}
                                </Row>
                                {/* Divider */}
                                {
                                    index < experience.length - 1 ?
                                        <Divider />
                                        : null
                                }
                            </>
                        ))
                    }

                </Box>

                <Box>
                    <Header2 id={sections.contacto.name}>{sections.contacto.title}</Header2>

                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={FaGoogle} />
                            <Link href="mailto:rguezque@gmail.com" title="Click to send email">rguezque@gmail.com</Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={FaGithub} />
                            <Link isExternal href="https://www.github.com/rguezque">github.com/rguezque</Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={FaLinkedin} />
                            <Link isExternal href="https://www.linkedin.com/in/rguezque">linkedin.com/in/rguezque</Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={FaTwitter} />
                            <Link isExternal href="https://www.twitter.com/rguezque">twitter.com/rguezque</Link>
                        </ListItem>
                    </List>
                </Box>

                <Box align="center">
                    <ScrollTopButton />
                </Box>

            </Container>

            <Footer />
        </>
    )
}
