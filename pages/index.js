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
    GridItem, 
    ProfilePhoto, 
    Row, 
    Header1, 
    Header2, 
    ScrollTopButton 
} from './../components'
import {
    FaDownload,
    FaGithub,
    FaGoogle,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa'


export default function Home() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width initial-scale=1"/>
                <meta name="description" content="Portafolio personal."/>
                <meta charSet="UTF-8" />
                <title>Luis Arturo Rodríguez | Jr Web Developer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container maxW="container.lg" >
                <Box display={{ md: 'flex' }} mb={6}>
                    <ProfilePhoto align="center" order={2}/>

                    <Box flexGrow={1} order={1}>
                        <Heading fontSize={{ base: 30, md: 35, xl: 40 }} fontWeight={200} mt={{ base: 4, md: 6 }} mb={0} pb={0}>Hola, soy</Heading>
                        {/* <Heading as="h1" size="2xl" fontWeight={500} mt={2} mb={2}>
                            Luis Arturo Rodr&iacute;guez
                        </Heading> */}
                        <Header1 mt={2} mb={2}>Luis Arturo Rodr&iacute;guez</Header1>
                        <Text fontWeight={600} fontSize={{ base: 17, md: 20 }}>
                            Jr. Web Developer
                        </Text>
                        <Text>
                            Desarrollador web, en proceso de aprendizaje con <b>NextJS</b>. Un poco de experiencia previa en PHP. He ejercido la docencia como profesor en dos universidades y tambi&eacute;n he estado en atención a clientes y ventas. Con entusiasmo de formar parte de un productivo y exitoso equipo. Aunque estuve alejado de la programación un tiempo, aprendo con rapidez nuevos conocimientos.
                        </Text>
                        <Link _hover={{ textDecoration: 'unset' }} href="/">
                            <Button bg={useColorModeValue('orange', 'purple')} leftIcon={<FaDownload />}>
                                <Text>Download Resume</Text>
                            </Button>
                        </Link>
                    </Box>

                    
                </Box>

                <Box>
                    {/* <Heading as="h2" size="xl" fontWeight={500}><a name="proyectos">Proyectos</a></Heading> */}
                    <Header2><a name="proyectos">Proyectos</a></Header2>

                    <SimpleGrid columns={[1, 2, 3]} gap={6}>
                        <GridItem href="#" thumbnail="/cv.svg" title="Portfolio personal">
                            Plantilla creada con React + NextJS + Chakra UI + Emotion + Framer Motion.
                        </GridItem>
                        <GridItem href="https://github.com/rguezque/adventure-game-basic-tutorial" thumbnail="/game.svg" title="Adventure Game">
                            Demo b&aacute;sico de un juego 2D de aventura hecho con JS.
                        </GridItem>
                        <GridItem href="https://github.com/rguezque/mozilla-theme-for-typora" thumbnail="/theme-typora.svg" title="Tema Mozilla para Typora">
                            Tema claro basado en el diseño de la web de Mozilla Developer.
                        </GridItem>
                        <GridItem href="https://github.com/rguezque/route" thumbnail="/route.svg" title="Route">
                            Un router PHP hecho como una pr&aacute;ctica personal.
                        </GridItem>
                    </SimpleGrid>
                </Box>

                <Box>
                    {/* <Heading as="h2" size="xl" fontWeight={500}><a name="experiencia">Experiencia</a></Heading> */}
                    <Header2><a name="experiencia">Experiencia</a></Header2>

                    <Row enterpriseName="Crehana Education" jobDuration="Sep 2021 - Ene 2022">
                        <b>Sales Agent</b>. Asesoría y gestión a alumnos de las membresías. Promoción y venta de los planes anuales mediante llamadas telefónicas (Call Center).
                    </Row>
                    <Divider />
                    <Row enterpriseName="Universidad Ju&aacute;rez Aut&oacute;noma de Tabasco" jobDuration="Feb 2019 - Sep 2020">
                        <b>Profesor de asignatura</b>. Clases presenciales en materias de programación y desarrollo web, asesorías a alumnos. Colaborador en desarrollo de pequeños sistemas de información locales.
                    </Row>
                    <Divider />
                    <Row enterpriseName="SIASOFT" jobDuration="Sep 2021 - Ene 2022">
                        <b>Desarrollo Web</b>. Visitas a PyMEs para promoción de servicios de soporte informático y desarrollo de sitios web, así como sistemas contables.
                    </Row>
                    <Divider />
                    <Row enterpriseName="Universidad Polit&eacute;cnica Mesoamericana" jobDuration="Sep 2013 - May 2014">
                    <b>Profesor de asignatura</b>. Clases presenciales en materias de programación en la modalidad escolarizada y semi-escolarizada a alumnos de M&eacute;xico y Guatemala.
                    </Row>
                </Box>

                <Box>
                    {/* <Heading as="h2" size="xl" fontWeight={500}><a name="contacto">Contacto</a></Heading> */}
                    <Header2><a name="contacto">Contacto</a></Header2>

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
        </>
    )
}
