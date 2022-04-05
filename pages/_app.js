import { ChakraProvider } from '@chakra-ui/react'
import { 
    Fonts, 
    Layout, 
    theme
} from './../components'

const MyPortfolio = ({ Component, pageProps }) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Fonts />
                {/* <Navbar/> */}
                <Component {...pageProps} />
                {/* <Footer /> */}
            </Layout>
        </ChakraProvider>
    )
}

export default MyPortfolio