import { Box, Text, LinkBox, LinkOverlay, Image } from '@chakra-ui/react'

const GridItem = ({ children, href, title, thumbnail, ...props}) => {
    return <Box w="100%" align="center" {...props}>
        <LinkBox cursor="pointer">
            <Image src={thumbnail} alt={title} borderRadius={12} boxSize='14rem'/>
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