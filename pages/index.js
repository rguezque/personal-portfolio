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


export default function Home() {
    const repo = 'https://github.com/rguezque';

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width initial-scale=1"/>
                <meta name="description" content="Portafolio personal. Next.js, PHP, CSS, HTML, Git y MySQL"/>
                <meta name="keywords" content="luis arturo rodriguez, desarrollador web, web developer, react, next, javascript, php, portfolio, portafolio" />
                <meta charSet="UTF-8" />
                <title>Luis Arturo Rodríguez | Web Developer Jr</title>
                <link rel="icon" href="favicon.ico" />
            </Head>

            <Navbar />

            <Container maxW="container.lg" >
                <Box display={{ md: 'flex' }} mb={6}>
                    <ProfilePhoto align="center" order={2}/>

                    <Box flexGrow={1} order={1}>
                        <Heading fontSize={{ base: 30, md: 35, xl: 40 }} fontWeight={200} mt={{ base: 4, md: 6 }} mb={0} pb={0}>Hola, soy</Heading>
                        <Header1 mt={2} mb={2}>Luis Arturo Rodr&iacute;guez</Header1>
                        <Text fontWeight={600} fontSize={{ base: 17, md: 20 }}>
                            Web Developer Jr.
                        </Text>
                        <Text>
                            Desarrollador web, en proceso de aprendizaje con <b>Next.js</b>. Experiencia previa en <b>PHP</b>, MySQL, HTML, CSS, Javascript, Git. He ejercido la docencia como profesor en dos universidades y tambi&eacute;n he estado en atención a clientes y ventas. Con entusiasmo de formar parte de un productivo y exitoso equipo. Aprendo con rapidez nuevos conocimientos.
                        </Text>
                        <Link isExternal _hover={{ textDecoration: 'unset' }} href="cv_luis_arturo.pdf">
                            <Button bg={useColorModeValue('orange', 'purple')} leftIcon={<FaDownload />}>
                                <Text>Descargar Resume</Text>
                            </Button>
                        </Link>
                    </Box>
                    
                </Box>

                <Box>
                    <Header2 id={sections.proyectos.name}>{sections.proyectos.title}</Header2>

                    <SimpleGrid columns={[1, 2, 3]} gap={6}>
                        <GridItem href={`${repo}/personal-portfolio`} thumbnail="cv.svg" title="Portfolio personal">
                            Plantilla creada con React + Next.js + Chakra UI + Emotion + Framer Motion
                        </GridItem>
                        <GridItem href={`${repo}/blog-template`} thumbnail="blog.svg" title="Blog personal">
                            Plantilla de un blog básico creado con React + Next.js + GraphQL + Tailwind
                        </GridItem>
                        <GridItem href={`${repo}/adventure-game-basic-tutorial`} thumbnail="game.svg" title="Adventure Game">
                            Demo b&aacute;sico de un juego 2D de aventura hecho con Javascript.
                        </GridItem>
                        <GridItem href={`${repo}/mozilla-theme-for-typora`} thumbnail="theme-typora.svg" title="Tema Mozilla para Typora">
                            Tema claro, basado en el diseño de la web de Mozilla Developer.
                        </GridItem>
                        <GridItem href={`${repo}/route`} thumbnail="route.svg" title="Route">
                            Un router PHP hecho como una pr&aacute;ctica personal.
                        </GridItem>
                    </SimpleGrid>
                </Box>

                <Box>
                    <Header2 id={sections.experiencia.name}>{sections.experiencia.title}</Header2>

                    <Row enterpriseName="Crehana Education" jobDuration="Sep 2021 - Ene 2022">
                        <b>Sales Agent</b>. Asesoría y gestión a alumnos de las membresías. Promoción y venta de los planes anuales mediante llamadas telefónicas (Call Center).
                    </Row>
                    <Divider />
                    <Row enterpriseName="Universidad Ju&aacute;rez Aut&oacute;noma de Tabasco" jobDuration="Feb 2019 - Sep 2020">
                        <b>Profesor de asignatura</b>. Clases presenciales en materias de programación y desarrollo web, asesorías a alumnos. Colaborador en desarrollo de pequeños sistemas de información locales.
                    </Row>
                    <Divider />
                    <Row enterpriseName="SIASOFT" jobDuration="Ago 2018 - Oct 2018">
                        <b>Desarrollo Web</b>. Visitas a PyMEs para promoción de servicios de soporte informático y desarrollo de sitios web, así como sistemas contables.
                    </Row>
                    <Divider />
                    <Row enterpriseName="Universidad Polit&eacute;cnica Mesoamericana" jobDuration="Sep 2013 - May 2014">
                    <b>Profesor de asignatura</b>. Clases presenciales en materias de programación en la modalidad escolarizada y semi-escolarizada a alumnos de M&eacute;xico y Guatemala.
                    </Row>
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
