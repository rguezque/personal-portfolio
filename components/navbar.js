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
    Text,

} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaLightbulb, FaBriefcase, FaPaperPlane, FaGrav } from 'react-icons/fa'
import ThemeToggleButton from './theme-toggle-button'
import sections from './lib/sections'
import { Link as LinkScroll } from 'react-scroll'


const LinkItem = ({ href, children, ...props }) => {
    return (
        <NextLink href={href} >
            <Link {...props}>
                {children}
            </Link>
        </NextLink>
    )
}


const Navbar = ({ ...props }) => {

    return (
        <Box position="relative" mb={10} pt={7} pb={7} as="nav" w="100%" bg={useColorModeValue('light', 'dark')} css={{ backdropFilter: 'blur(10px)' }} zIndex={1} {...props}>
            <Container display="flex" maxW="container.lg" align="center" alignItems="center" justify="space-between">
                <Flex mr={5} gap={3} alignItems="center">
                    <Text fontSize={40} gap={3}>
                        <FaGrav /> 
                    </Text>
                    <Text display={{ base: 'inline-block', md: 'none' }}>Portfolio personal</Text>
                </Flex>

                <Stack gap={3} direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }} width={{ base: 'full', md: 'auto' }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }} >
                    <LinkScroll to={sections.proyectos.name} smooth={true} delay={0} isDynamic={true}>
                        <Link display="inline-flex" alignItems="center" style={{ gap: 4 }}>
                            {sections.proyectos.title}
                        </Link>
                    </LinkScroll>

                    <LinkScroll to={sections.experiencia.name} smooth={true} delay={0} isDynamic={true}>
                        <Link display="inline-flex" alignItems="center" style={{ gap: 4 }}>
                            {sections.experiencia.title}
                        </Link>
                    </LinkScroll>

                    <LinkScroll to={sections.contacto.name} smooth={true} delay={0} isDynamic={true}>
                        <Link display="inline-flex" alignItems="center" style={{ gap: 4 }}>
                            {sections.contacto.title}
                        </Link>
                    </LinkScroll>

                </Stack>

                <Box flex={1} align="right" alignItems="center">
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                            <MenuList>
                                <LinkScroll to={sections.proyectos.name} smooth={true} delay={0} isDynamic={true}>
                                    <MenuItem icon={<FaLightbulb />}>
                                        {sections.proyectos.title}
                                    </MenuItem>
                                </LinkScroll>
                                <LinkScroll to={sections.experiencia.name} smooth={true} delay={0} isDynamic={true}>
                                    <MenuItem icon={<FaBriefcase />}>
                                        {sections.experiencia.title}
                                    </MenuItem>
                                </LinkScroll>
                                <LinkScroll to={sections.contacto.name} smooth={true} delay={0} isDynamic={true}>
                                    <MenuItem icon={<FaPaperPlane />}>
                                        {sections.contacto.title}
                                    </MenuItem>
                                </LinkScroll>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar