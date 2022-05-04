import { Box, Image, useColorModeValue } from '@chakra-ui/react'
import { css } from '@emotion/react'

const ProfilePhoto = ({ ...props }) => {
    const bwFilter = css`filter: grayscale(1); transform: rotate(45deg)`
    const colorFilter = css`transform: rotate(45deg)`

    return (
        <Box flexShrink={0} mt={{ base: 4, md: 6 }} ml={{ md: 10 }} {...props}>
            <Image 
                css={useColorModeValue(colorFilter, bwFilter)} 
                borderColor="whiteAlpha.800" 
                borderWidth={2} 
                borderStyle="solid" 
                maxWidth="160px" 
                minWidth="100px" 
                display="inline-block" 
                borderRadius="full" 
                src="rguezque.png" 
                alt="Profile photo" 
            />
        </Box>
    )
}

export default ProfilePhoto