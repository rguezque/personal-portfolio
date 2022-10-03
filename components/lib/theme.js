import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props) => ({
        body: {
            fontSize: { base: 14, md: 15, lg: 16 }
        },
        p: {
            fontSize: { base: 14, md: 15, lg: 16 },
            marginBottom: 18,
            marginTop: 18,
            fontStyle: 'normal',
            a: {
                borderBottom: '1px',
                borderStyle: 'dotted',
                borderColor: mode('#6b46c1', '#f6ad55')(props),
                color: mode('#6b46c1 !important', '#f6ad55 !important')(props),
                _hover: {
                    textDecoration: 'none !important'
                }
            }
        },
        'h1, h2, h3, h4, h5': {
            marginTop: 16,
            marginBottom: 8
        },
        '.navbar-item': {
            _hover: {
                cursor: 'pointer',
                textDecoration: 'underline', 
                textUnderlineOffset: 4,
            }
        }
    })
}

const fonts = {
    heading: 'Poppins',
    body: 'Poppins',
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({ config, fonts, styles })

export default theme