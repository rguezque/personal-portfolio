import { Box, Text, LinkBox, LinkOverlay, Image } from '@chakra-ui/react'

const GridItem = ({ children, href, title, thumbnail }) => {
    return <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail} alt={title} borderRadius={12} />
            <LinkOverlay href={href} isExternal>
                <Text fontWeight={700}>
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontSize={[12, 14, 16]}>{children}</Text>
        </LinkBox>
    </Box>
}

export default GridItem