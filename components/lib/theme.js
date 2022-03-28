import { extendTheme } from '@chakra-ui/react'
//import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: {
        /* html: {
            scrollBehavior: 'smooth'
        }, */
        a: {
            _hover: {
                textUnderlineOffset: 4,
                //textDecorationColor: mode('purple', 'orange')(props) 
            }
        },
        body: {
            //bg: mode('#fff8dc', '#1A202C')(props),
            fontSize: { base: 14, md: 15, lg: 16 }
        },
        p: {
            fontSize: { base: 14, md: 15, lg: 16 },
            marginBottom: 18,
            marginTop: 18,
            fontStyle: 'normal'
        },
        'h1, h2, h3, h4, h5': {
            marginTop: 16,
            marginBottom: 8
        }
    }
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