import { Box, Divider, Text } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box>
            <Divider mt={10} mb={10} />
            <Box align="center" opacity={0.4} mb={10} fontSize="sm">
                <Text mt={0}>&copy; {new Date().getFullYear()} Luis Arturo Rodr&iacute;guez. All Rights Reserved.</Text>
            </Box>
        </Box>
    )
}

export default Footer