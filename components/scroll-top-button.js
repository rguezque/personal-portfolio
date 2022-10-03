import { ChevronUpIcon } from '@chakra-ui/icons'
import { Button, useColorModeValue } from '@chakra-ui/react'

const ScrollTopButton = () => {
    
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Button onClick={handleClick} as="button" colorScheme={useColorModeValue('purple', 'orange')} borderRadius="full" align="center" alignItems="center" h={10} w={10} mt={10} title="Scroll top"><ChevronUpIcon/></Button>
    )
}

export default ScrollTopButton