import { Heading } from '@chakra-ui/react'

export const Header1 = ({children, ...props}) => {
    return (
        <Heading as="h1" size="2xl" fontWeight={500} {...props}>
            {children}
        </Heading>
    )
}

export const Header2 = ({children, ...props}) => {
    return (
        <Heading as="h2" size="xl" fontWeight={500} {...props}>
            {children}
        </Heading>
    )
}