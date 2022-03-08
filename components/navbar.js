import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    Flex,

} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaLightbulb, FaBriefcase, FaPaperPlane, FaGrav } from 'react-icons/fa'
import ThemeToggleButton from './theme-toggle-button'

const sections = {
    home: {
        title: 'Home',
        url: '/'
    },
    proyectos: {
        title: 'Proyectos',
        url: '/#proyectos'
    },
    experiencia: {
        title: 'Experiencia',
        url: '/#experiencia'
    },
    contacto: {
        title: 'Contacto',
        url: '/#contacto'
    }
}

const LinkItem = ({ href, children, ...props }) => {
    return (
        <NextLink href={href} >
            <Link {...props}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    return (
        <Box position="relative" mb={10} pt={7} pb={7} as="nav" w="100%" bg={useColorModeValue('light', 'dark')} css={{ backdropFilter: 'blur(10px)' }} zIndex={1} {...props}>
            <Container display="flex" maxW="container.lg" align="center" alignItems="center" justify="space-between">
                <Flex mr={5}>
                    <LinkItem href={sections.home.url} fontSize={40}>
                        <FaGrav/>
                    </LinkItem>
                </Flex>

                <Stack direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }} width={{ base: 'full', md: 'auto' }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }} >
                    <LinkItem href={sections.proyectos.url} display="inline-flex" alignItems="center" pl={2} style={{ gap: 4 }}>
                        {sections.proyectos.title}
                    </LinkItem>
                    <LinkItem href={sections.experiencia.url} display="inline-flex" alignItems="center" pl={2} style={{ gap: 4 }} >
                        {sections.experiencia.title}
                    </LinkItem>
                    <LinkItem href={sections.contacto.url} display="inline-flex" alignItems="center" pl={2} style={{ gap: 4 }} >
                        {sections.contacto.title}
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right" alignItems="center">
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                            <MenuList>
                                <NextLink href={sections.proyectos.url} passHref>
                                    <MenuItem as={Link} icon={<FaLightbulb />}>
                                        {sections.proyectos.title}
                                    </MenuItem>
                                </NextLink>
                                <NextLink href={sections.experiencia.url} passHref>
                                    <MenuItem as={Link} icon={<FaBriefcase />}>
                                        {sections.experiencia.title}
                                    </MenuItem>
                                </NextLink>
                                <NextLink href={sections.contacto.url} passHref>
                                    <MenuItem as={Link} icon={<FaPaperPlane />}>
                                        {sections.contacto.title}
                                    </MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar