import { Box, Stack, Text } from '@chakra-ui/react'

const Row = ({ children, enterpriseName, jobDuration}) => {
    return (
        <Stack mt={5} mb={5} direction={['column', 'row']} spacing='4%' display="flex">
            <Box w="30%">
                <Text m={0} fontWeight={600}>
                    { enterpriseName }
                </Text>
                <Text m={0}>
                    { jobDuration }
                </Text>
            </Box>
            <Box display="inline-block" w="66%">
                <Text m={0}>
                    { children }
                </Text>
            </Box>
        </Stack>
    )
}

export default Row