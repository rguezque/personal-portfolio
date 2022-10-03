import NextLink from 'next/link'
import {
    Container,
    Box,
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
import { FaLightbulb, FaBriefcase, FaPaperPlane, FaUserAstronaut } from 'react-icons/fa'
import ThemeToggleButton from './theme-toggle-button'
import sections from './lib/sections'
import { Link as LinkScroll } from 'react-scroll'

const LinkItem = ({ to, children, ...props }) => {
    return (
        <LinkScroll to={to} smooth={true} delay={0} isDynamic={true} {...props}>
            { children }
        </LinkScroll>
    )
}

const Navbar = ({ ...props }) => {

    return (
        <Box position="relative" mb={10} pt={7} pb={7} as="nav" w="100%" bg={useColorModeValue('light', 'dark')} css={{ backdropFilter: 'blur(10px)' }} zIndex={10} {...props}>
            <Container display="flex" maxW="container.lg" align="center" alignItems="center" justify="space-between">
                <Flex mr={5} gap={3} alignItems="center">
                    <Text fontSize={{sm:33, md: 40}} gap={3}>
                        <FaUserAstronaut /> 
                    </Text>
                    <Text display={{ base: 'inline-block', md: 'none' }} fontWeight={700} fontSize='md'>Portfolio personal</Text>
                </Flex>

                <Stack gap={3} direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }} width={{ base: 'full', md: 'auto' }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }} >
                    <LinkItem to={sections.proyectos.name}>
                        <Text className='navbar-item'>{sections.proyectos.title}</Text>
                    </LinkItem>

                    <LinkItem to={sections.experiencia.name}>
                        <Text className='navbar-item'>{sections.experiencia.title}</Text>
                    </LinkItem>

                    <LinkItem to={sections.contacto.name}>
                        <Text className='navbar-item'>{sections.contacto.title}</Text>
                    </LinkItem>

                </Stack>

                <Box flex={1} align="right" alignItems="center">
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                            <MenuList>
                                <LinkItem to={sections.proyectos.name}>
                                    <MenuItem icon={<FaLightbulb />}>
                                        {sections.proyectos.title}
                                    </MenuItem>
                                </LinkItem>
                                <LinkItem to={sections.experiencia.name}>
                                    <MenuItem icon={<FaBriefcase />}>
                                        {sections.experiencia.title}
                                    </MenuItem>
                                </LinkItem>
                                <LinkItem to={sections.contacto.name}>
                                    <MenuItem icon={<FaPaperPlane />}>
                                        {sections.contacto.title}
                                    </MenuItem>
                                </LinkItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar